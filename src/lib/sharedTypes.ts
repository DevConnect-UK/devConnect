export enum UserType {
    Student = "Student",
    Business = "Business",
    Admin = "Admin",
    Guest = "Guest",
}

export function userTypeFromString(userType: string | null): UserType {
    if (userType == null) return UserType.Guest;

    const validUserTypes = Object.values(UserType) as string[];

    if (!validUserTypes.includes(userType)) {
        console.error(`Invalid user type: ${userType}`);
        return UserType.Guest;
    }

    return userType as UserType;
}
