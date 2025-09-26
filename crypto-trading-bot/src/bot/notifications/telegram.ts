export class TelegramNotifier {
    private botToken: string;
    private chatId: string;

    constructor(botToken: string, chatId: string) {
        this.botToken = botToken;
        this.chatId = chatId;
    }

    public async sendTradeNotification(message: string): Promise<void> {
        const url = `https://api.telegram.org/bot${this.botToken}/sendMessage`;
        const payload = {
            chat_id: this.chatId,
            text: message,
        };

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                throw new Error(`Error sending message: ${response.statusText}`);
            }
        } catch (error) {
            console.error('Failed to send Telegram notification:', error);
        }
    }
}