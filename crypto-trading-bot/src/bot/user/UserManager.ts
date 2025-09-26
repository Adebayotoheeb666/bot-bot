// UserManager: Basic multi-user management scaffold
import fs from 'fs';
import path from 'path';

const USERS_FILE = path.resolve(__dirname, 'users.json');

export interface User {
    id: string;
    name: string;
    apiKey: string;
    apiSecret: string;
    tradeLimit?: number;
    minTradeSize?: number;
    telegramBotToken?: string;
    telegramChatId?: string;
}

export class UserManager {
    private users: Map<string, User> = new Map();

    constructor() {
        this.loadUsers();
    }

    addUser(user: User) {
        this.users.set(user.id, user);
        this.saveUsers();
    }

    getUser(id: string): User | undefined {
        return this.users.get(id);
    }

    removeUser(id: string) {
        this.users.delete(id);
        this.saveUsers();
    }

    listUsers(): User[] {
        return Array.from(this.users.values());
    }

    private loadUsers() {
        if (fs.existsSync(USERS_FILE)) {
            const data = fs.readFileSync(USERS_FILE, 'utf-8');
            const users: User[] = JSON.parse(data);
            users.forEach(user => this.users.set(user.id, user));
        }
    }

    private saveUsers() {
        fs.writeFileSync(USERS_FILE, JSON.stringify(this.listUsers(), null, 2));
    }
}
