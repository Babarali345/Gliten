import {Pressable} from 'react-native';
import React from 'react';
import {Svg, Path, Rect, Circle,Image,Defs,Pattern,Use} from 'react-native-svg';
import {COLORS} from '../../constants/them';

export function ActivitySvg({focused}) {
  return (
    <Svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill={focused ? COLORS.primary : 'none'}
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M12 22.5C17.5228 22.5 22 18.0228 22 12.5C22 6.97715 17.5228 2.5 12 2.5C6.47715 2.5 2 6.97715 2 12.5C2 18.0228 6.47715 22.5 12 22.5Z"
        stroke={focused ? COLORS.primary : '#64748B'}
        stroke-width="1.15"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M12 6.5V12.5L16 14.5"
        stroke={focused ? COLORS.white : '#64748B'}
        stroke-width="1.15"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
export function DrawerContentHomeIcon() {
  return (
    <Svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M15.97 5.70238L10.637 1.55438C10.169 1.19029 9.59296 0.992615 9 0.992615C8.40704 0.992615 7.83101 1.19029 7.363 1.55438L2.029 5.70238C1.70844 5.95167 1.44909 6.27091 1.27076 6.63573C1.09242 7.00055 0.999809 7.40131 1 7.80738V15.0074C1 15.5378 1.21071 16.0465 1.58579 16.4216C1.96086 16.7967 2.46957 17.0074 3 17.0074H15C15.5304 17.0074 16.0391 16.7967 16.4142 16.4216C16.7893 16.0465 17 15.5378 17 15.0074V7.80738C17 6.98438 16.62 6.20738 15.97 5.70238Z"
        fill="#64748B"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M12.97 11.9924C10.76 13.3254 7.17797 13.3254 4.96997 11.9924H12.97Z"
        fill="#64748B"
      />
      <Path
        d="M12.97 11.9924C10.76 13.3254 7.17797 13.3254 4.96997 11.9924"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
export function EditProfileIcon() {
  return (
    <Svg
      width="25"
      height="25"
      viewBox="0 0 33 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Rect x="1.5" y="1" width="30" height="30" rx="15" fill="#121826" />
      <Path
        d="M21.75 21.8333H11.25C11.0108 21.8333 10.8125 21.635 10.8125 21.3958C10.8125 21.1567 11.0108 20.9583 11.25 20.9583H21.75C21.9892 20.9583 22.1875 21.1567 22.1875 21.3958C22.1875 21.635 21.9892 21.8333 21.75 21.8333Z"
        fill="white"
      />
      <Path
        d="M20.595 11.03C19.4633 9.89837 18.355 9.86921 17.1941 11.03L16.4883 11.7359C16.43 11.7942 16.4066 11.8875 16.43 11.9692C16.8733 13.515 18.11 14.7517 19.6558 15.195C19.6791 15.2009 19.7025 15.2067 19.7258 15.2067C19.79 15.2067 19.8483 15.1834 19.895 15.1367L20.595 14.4309C21.1725 13.8592 21.4525 13.305 21.4525 12.745C21.4583 12.1675 21.1783 11.6075 20.595 11.03Z"
        fill="white"
      />
      <Path
        d="M18.6058 15.7258C18.4366 15.6441 18.2733 15.5625 18.1158 15.4691C17.9875 15.3933 17.865 15.3116 17.7425 15.2241C17.6433 15.16 17.5266 15.0666 17.4158 14.9733C17.4041 14.9675 17.3633 14.9325 17.3166 14.8858C17.1241 14.7225 16.9083 14.5125 16.7158 14.2791C16.6983 14.2675 16.6691 14.2266 16.6283 14.1741C16.57 14.1041 16.4708 13.9875 16.3833 13.8533C16.3133 13.7658 16.2316 13.6375 16.1558 13.5091C16.0625 13.3516 15.9808 13.1941 15.8991 13.0308V13.0308C15.7921 12.8014 15.4909 12.7332 15.3119 12.9122L12.0316 16.1925C11.9558 16.2683 11.8858 16.4141 11.8683 16.5133L11.5533 18.7475C11.495 19.1441 11.6058 19.5175 11.8508 19.7683C12.0608 19.9725 12.3525 20.0833 12.6675 20.0833C12.7375 20.0833 12.8075 20.0775 12.8775 20.0658L15.1175 19.7508C15.2225 19.7333 15.3683 19.6633 15.4383 19.5875L18.7239 16.3018C18.8994 16.1264 18.8335 15.8245 18.6058 15.7258V15.7258Z"
        fill="white"
      />
      <Rect
        x="1.5"
        y="1"
        width="30"
        height="30"
        rx="15"
        stroke="white"
        stroke-width="2"
      />
    </Svg>
  );
}
export function AboutUs() {
  return (
    <Svg
      width="15"
      height="16"
      viewBox="0 0 15 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Circle
        cx="7.16429"
        cy="8.17947"
        r="6.41429"
        fill="#64748B"
        stroke="#64748B"
        stroke-width="1.5"
      />
      <Path
        d="M6.63694 11.6562H7.69163V6.51953H6.63694V11.6562ZM7.16428 5.76758C7.50608 5.76758 7.77952 5.49902 7.77952 5.16699C7.77952 4.83008 7.50608 4.56152 7.16428 4.56152C6.82737 4.56152 6.55393 4.83008 6.55393 5.16699C6.55393 5.49902 6.82737 5.76758 7.16428 5.76758Z"
        fill="white"
      />
    </Svg>
  );
}
export function HomeSvg({focused}) {
  return (
    <Svg
      width="19"
      height="19"
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M16.5 6.21001L11.167 2.06201C10.699 1.69792 10.123 1.50024 9.53 1.50024C8.93704 1.50024 8.36101 1.69792 7.893 2.06201L2.559 6.21001C2.23844 6.4593 1.97909 6.77854 1.80076 7.14336C1.62242 7.50818 1.52981 7.90894 1.53 8.31501V15.515C1.53 16.0454 1.74071 16.5542 2.11579 16.9292C2.49086 17.3043 2.99957 17.515 3.53 17.515H15.53C16.0604 17.515 16.5691 17.3043 16.9442 16.9292C17.3193 16.5542 17.53 16.0454 17.53 15.515V8.31501C17.53 7.49201 17.15 6.71501 16.5 6.21001Z"
        fill={focused ? COLORS.primary : 'none'}
        stroke={focused ? COLORS.primary : '#64748B'}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
export default function Login() {
  return (
    <Svg
      width="13"
      height="20"
      viewBox="0 0 13 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M6.5 8.94444C8.89323 8.94444 10.8333 7.05409 10.8333 4.72222C10.8333 2.39035 8.89323 0.5 6.5 0.5C4.10677 0.5 2.16667 2.39035 2.16667 4.72222C2.16667 7.05409 4.10677 8.94444 6.5 8.94444Z"
        fill="#64748B"
      />
      <Path
        d="M0 19.5V17.3889C0 16.2691 0.456546 15.1951 1.2692 14.4033C2.08186 13.6115 3.18406 13.1667 4.33333 13.1667H8.66667C9.81594 13.1667 10.9181 13.6115 11.7308 14.4033C12.5435 15.1951 13 16.2691 13 17.3889V19.5"
        fill="#64748B"
      />
    </Svg>
  );
}
export function PrivacyPolicy() {
  return (
    <Svg
      width="14"
      height="18"
      viewBox="0 0 14 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M6.75 0.75L0 3.75V8.25C0 12.4125 2.88 16.305 6.75 17.25C10.62 16.305 13.5 12.4125 13.5 8.25V3.75L6.75 0.75ZM6 5.25H7.5V6.75H6V5.25ZM6 8.25H7.5V12.75H6V8.25Z"
        fill="#64748B"
      />
    </Svg>
  );
}
export function ProfileSvg({focused}) {
  return (
    <Svg
      width="15"
      height="21"
      viewBox="0 0 15 21"
      fill={focused ? COLORS.primary : 'none'}
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M7.5 9.5C9.70914 9.5 11.5 7.70914 11.5 5.5C11.5 3.29086 9.70914 1.5 7.5 1.5C5.29086 1.5 3.5 3.29086 3.5 5.5C3.5 7.70914 5.29086 9.5 7.5 9.5Z"
        stroke="#64748B"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M1.5 19.5V17.5C1.5 16.4391 1.92143 15.4217 2.67157 14.6716C3.42172 13.9214 4.43913 13.5 5.5 13.5H9.5C10.5609 13.5 11.5783 13.9214 12.3284 14.6716C13.0786 15.4217 13.5 16.4391 13.5 17.5V19.5"
        stroke="#64748B"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
export function ProfilTickIcon() {
  return (
    <Svg
      width="15"
      height="17"
      viewBox="0 0 17 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M16.4667 7.95L15.3333 6.63333C15.1167 6.38333 14.9417 5.91666 14.9417 5.58333V4.16666C14.9417 3.28333 14.2167 2.55833 13.3333 2.55833H11.9167C11.5917 2.55833 11.1167 2.38333 10.8667 2.16666L9.55 1.03333C8.975 0.541665 8.03334 0.541665 7.45 1.03333L6.14167 2.175C5.89167 2.38333 5.41667 2.55833 5.09167 2.55833H3.65C2.76667 2.55833 2.04167 3.28333 2.04167 4.16666V5.59166C2.04167 5.91666 1.86667 6.38333 1.65834 6.63333L0.533337 7.95833C0.0500041 8.53333 0.0500041 9.46666 0.533337 10.0417L1.65834 11.3667C1.86667 11.6167 2.04167 12.0833 2.04167 12.4083V13.8333C2.04167 14.7167 2.76667 15.4417 3.65 15.4417H5.09167C5.41667 15.4417 5.89167 15.6167 6.14167 15.8333L7.45834 16.9667C8.03334 17.4583 8.97501 17.4583 9.55834 16.9667L10.875 15.8333C11.125 15.6167 11.5917 15.4417 11.925 15.4417H13.3417C14.225 15.4417 14.95 14.7167 14.95 13.8333V12.4167C14.95 12.0917 15.125 11.6167 15.3417 11.3667L16.475 10.05C16.9583 9.475 16.9583 8.525 16.4667 7.95ZM11.9667 7.425L7.94167 11.45C7.825 11.5667 7.66667 11.6333 7.5 11.6333C7.33334 11.6333 7.175 11.5667 7.05834 11.45L5.04167 9.43333C4.8 9.19166 4.8 8.79166 5.04167 8.55C5.28334 8.30833 5.68334 8.30833 5.925 8.55L7.5 10.125L11.0833 6.54166C11.325 6.3 11.725 6.3 11.9667 6.54166C12.2083 6.78333 12.2083 7.18333 11.9667 7.425Z"
        fill="#2972FF"
      />
    </Svg>
  );
}
export function ShortListedSvg({focused}) {
  return (
    <Svg
      width="22"
      height="21"
      viewBox="0 0 22 21"
      fill={focused ? COLORS.primary : 'none'}
      xmlns="http://www.w3.org/2000/svg">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M1.87187 10.0983C0.798865 6.74832 2.05287 2.91932 5.56987 1.78632C7.41987 1.18932 9.46187 1.54132 10.9999 2.69832C12.4549 1.57332 14.5719 1.19332 16.4199 1.78632C19.9369 2.91932 21.1989 6.74832 20.1269 10.0983C18.4569 15.4083 10.9999 19.4983 10.9999 19.4983C10.9999 19.4983 3.59787 15.4703 1.87187 10.0983Z"
        stroke="#64748B"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
export function SignUp() {
  return (
    <Svg
      width="14"
      height="12"
      viewBox="0 0 14 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M10.5 2.66667L9.513 3.60667L11.319 5.33333H4.2V6.66667H11.319L9.513 8.38667L10.5 9.33333L14 6L10.5 2.66667ZM1.4 1.33333H7V0H1.4C0.63 0 0 0.6 0 1.33333V10.6667C0 11.4 0.63 12 1.4 12H7V10.6667H1.4V1.33333Z"
        fill="#64748B"
      />
    </Svg>
  );
}
export function MenueIcon({onPress}) {
  return (
    <Pressable
    style={({pressed})=>[{
      opacity:pressed?0.8:1
    }]}
    onPress={onPress}
    >
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M3 12H21"
        stroke="black"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M3 6H21"
        stroke="black"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M3 18H21"
        stroke="black"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
    </Pressable>
  );
}
export function ListEmptySvg() {
  return (
    <Svg
      width="123"
      height="204"
      viewBox="0 0 123 204"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M60.6087 203.217C48.4869 203.217 44.8623 191.928 44.5652 186.283H79.3261C78.1376 191.928 72.7304 203.217 60.6087 203.217Z"
        fill="#F9BE21"
      />
      <Path d="M123 186.283H0L60.6087 124.783L123 186.283Z" fill="#3697DC" />
      <Path d="M60.6087 131.022V0" stroke="#3697DC" stroke-width="2" />
    </Svg>
  );
}
export function FilterSearchIcon() {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path d="M11.5 14C14.5376 14 17 11.5376 17 8.5C17 5.46243 14.5376 3 11.5 3C8.46243 3 6 5.46243 6 8.5C6 11.5376 8.46243 14 11.5 14Z" stroke="#094C91" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <Path d="M11.5 14V21" stroke="#094C91" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </Svg>
  );
}
export function PlusIconSvg() {
  return (
    <Svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path d="M5.08337 1V9.16667" stroke="#838383" stroke-width="1.15" stroke-linecap="round" stroke-linejoin="round"/>
    <Path d="M1 5.08337H9.16667" stroke="#838383" stroke-width="1.15" stroke-linecap="round" stroke-linejoin="round"/>
    </Svg>
  );
}

