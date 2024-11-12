import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
    private readonly usernameInput = '#username';
    private readonly passwordInput = '#password';
    private readonly loginButton = '#login-button';

    async login(username: string, password: string) {
        await this.page.fill(this.usernameInput, username);
        await this.page.fill(this.passwordInput, password);
    }
}
