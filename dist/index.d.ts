import { ButtonHTMLAttributes } from 'react';
import { default as default_2 } from 'react';

export declare const Button: default_2.FC<ButtonProps>;

export declare type ButtonColor = keyof typeof colors;

export declare interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    backgroundColor?: ButtonColor;
}

export declare type ButtonVariant = 'primary' | 'secondary';

declare const colors: {
    readonly primary: "#2563EB";
    readonly primary50: "#EFF6FF";
    readonly primary100: "#DBEAFE";
    readonly primary200: "#BFDBFE";
    readonly primary300: "#93C5FD";
    readonly primary400: "#60A5FA";
    readonly primary500: "#3B82F6";
    readonly primary600: "#2563EB";
    readonly primary700: "#1D4ED8";
    readonly primary800: "#1E40AF";
    readonly primary900: "#1E3A8A";
    readonly secondary: "#7C3AED";
    readonly secondary50: "#F5F3FF";
    readonly secondary100: "#EDE9FE";
    readonly secondary200: "#DDD6FE";
    readonly secondary300: "#C4B5FD";
    readonly secondary400: "#A78BFA";
    readonly secondary500: "#8B5CF6";
    readonly secondary600: "#7C3AED";
    readonly secondary700: "#6D28D9";
    readonly secondary800: "#5B21B6";
    readonly secondary900: "#4C1D95";
    readonly accent: "#F59E0B";
    readonly accent50: "#FFFBEB";
    readonly accent100: "#FEF3C7";
    readonly accent200: "#FDE68A";
    readonly accent300: "#FCD34D";
    readonly accent400: "#FBBF24";
    readonly accent500: "#F59E0B";
    readonly accent600: "#D97706";
    readonly accent700: "#B45309";
    readonly accent800: "#92400E";
    readonly accent900: "#78350F";
    readonly success: "#22C55E";
    readonly success50: "#F0FDF4";
    readonly success100: "#DCFCE7";
    readonly success200: "#BBF7D0";
    readonly success300: "#86EFAC";
    readonly success400: "#4ADE80";
    readonly success500: "#22C55E";
    readonly success600: "#16A34A";
    readonly success700: "#15803D";
    readonly success800: "#166534";
    readonly success900: "#14532D";
    readonly error: "#EF4444";
    readonly error50: "#FEF2F2";
    readonly error100: "#FEE2E2";
    readonly error200: "#FECACA";
    readonly error300: "#FCA5A5";
    readonly error400: "#F87171";
    readonly error500: "#EF4444";
    readonly error600: "#DC2626";
    readonly error700: "#B91C1C";
    readonly error800: "#991B1B";
    readonly error900: "#7F1D1D";
    readonly warning: "#F97316";
    readonly warning50: "#FFF7ED";
    readonly warning100: "#FFEDD5";
    readonly warning200: "#FED7AA";
    readonly warning300: "#FDBA74";
    readonly warning400: "#FB923C";
    readonly warning500: "#F97316";
    readonly warning600: "#EA580C";
    readonly warning700: "#C2410C";
    readonly warning800: "#9A3412";
    readonly warning900: "#7C2D12";
    readonly info: "#3B82F6";
    readonly info50: "#EFF6FF";
    readonly info100: "#DBEAFE";
    readonly info200: "#BFDBFE";
    readonly info300: "#93C5FD";
    readonly info400: "#60A5FA";
    readonly info500: "#3B82F6";
    readonly info600: "#2563EB";
    readonly info700: "#1D4ED8";
    readonly info800: "#1E40AF";
    readonly info900: "#1E3A8A";
    readonly white: "#FFFFFF";
    readonly black: "#000000";
    readonly gray50: "#F9FAFB";
    readonly gray100: "#F3F4F6";
    readonly gray200: "#E5E7EB";
    readonly gray300: "#D1D5DB";
    readonly gray400: "#9CA3AF";
    readonly gray500: "#6B7280";
    readonly gray600: "#4B5563";
    readonly gray700: "#374151";
    readonly gray800: "#1F2937";
    readonly gray900: "#111827";
};

export { }
