
export class AppVariables {
    private userName: String;

    SetUserName(username: String) {
        this.userName = username;
    }

    GetUserName() : String {
        return this.userName;
    }
}