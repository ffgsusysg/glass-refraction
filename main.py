import random
from datetime import datetime
from telegram import InlineKeyboardButton, InlineKeyboardMarkup, Update
from telegram.constants import ParseMode
from telegram.ext import ApplicationBuilder, CommandHandler, CallbackQueryHandler, ContextTypes

# --- محتوى تحفيزي ---
QURAN_VERSES = [
    ("وَقُلِ اعْمَلُوا فَسَيَرَى اللَّهُ عَمَلَكُمْ", "(التوبة: 105) - اجتهد، فالله يرى سعيك"),
    ("وَالَّذِينَ جَاهَدُوا فِينَا لَنَهْدِيَنَّهُمْ سُبُلَنَا", "(العنكبوت: 69) - السعي طريق الهداية"),
    ("وَاصْبِرْ وَمَا صَبْرُكَ إِلَّا بِاللَّهِ", "(النحل: 127) - الثبات معونة من الله"),
    ("إِنَّ اللَّهَ مَعَ الصَّابِرِينَ", "(البقرة: 153) - الله معك ما دمت صابرًا")
]

DAILY_QUOTES = [
    "ابدأ يومك بهدف واضح، وسترَ الفرق.",
    "النجاح لا يحتاج أعذارًا، بل خطوات.",
    "كل دقيقة دراسة اليوم = ساعة راحة غدًا."
]

CHALLENGE_MESSAGE = "أخوي، أختي! جرّبوا بوت #متجرعات_المستقبل لتحفيز دراستكم!\n@YourBotUsername"
EXAM_DATE = datetime(2025, 6, 14, 8, 0, 0)

async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    keyboard = [
        [
            InlineKeyboardButton("معنى اليوم", callback_data="meaning"),
            InlineKeyboardButton("آيات إضافية", callback_data="ayahs")
        ],
        [
            InlineKeyboardButton("شارك التحدي", callback_data="share")
        ]
    ]
    reply_markup = InlineKeyboardMarkup(keyboard)

    await update.message.reply_text(
        "<b>أهلاً بك في متجرعات المستقبل!</b>\n\n"
        "أنت على بُعد خطوات من النجاح، ونحن هنا لنحفزك بأسلوب مستقبلي.\n"
        "استخدم /countdown لحساب الوقت المتبقي للامتحانات.",
        reply_markup=reply_markup,
        parse_mode=ParseMode.HTML
    )

async def countdown(update: Update, context: ContextTypes.DEFAULT_TYPE):
    now = datetime.now()
    delta = EXAM_DATE - now
    days = delta.days
    hours, remainder = divmod(delta.seconds, 3600)
    minutes, _ = divmod(remainder, 60)

    await update.message.reply_text(
        f"<b>العد التنازلي للامتحانات:</b>\n\n"
        f"{days} يوم / {hours} ساعة / {minutes} دقيقة متبقية!\n\n"
        f"<i>ثابر، فالنهاية قريبة والنصر ينتظرك.</i>",
        parse_mode=ParseMode.HTML
    )

async def button_handler(update: Update, context: ContextTypes.DEFAULT_TYPE):
    query = update.callback_query
    await query.answer()

    if query.data == "meaning":
        message = random.choice(DAILY_QUOTES)
        await query.edit_message_text(f"<b>معنى اليوم:</b>\n\n{message}", parse_mode=ParseMode.HTML)

    elif query.data == "ayahs":
        verse, tafsir = random.choice(QURAN_VERSES)
        await query.edit_message_text(
            f"<b>آية تحفيزية:</b>\n\n{verse}\n<i>{tafsir}</i>",
            parse_mode=ParseMode.HTML
        )

    elif query.data == "share":
        await query.edit_message_text(CHALLENGE_MESSAGE)

def main():
    TOKEN = "PUT_YOUR_BOT_TOKEN_HERE"
    app = ApplicationBuilder().token(TOKEN).build()
    app.add_handler(CommandHandler("start", start))
    app.add_handler(CommandHandler("countdown", countdown))
    app.add_handler(CallbackQueryHandler(button_handler))
    app.run_polling()

if __name__ == "__main__":
    main()