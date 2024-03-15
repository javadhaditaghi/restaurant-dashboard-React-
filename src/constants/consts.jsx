// --------------------Start of Sidebar buttons text and icons---------------------
const sidebarButtons = [
    {
        title: "Dashboard",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 21.75C14.5859 21.75 17.0658 20.7228 18.8943 18.8943C20.7228 17.0658 21.75 14.5859 21.75 12C21.75 9.41414 20.7228 6.93419 18.8943 5.10571C17.0658 3.27723 14.5859 2.25 12 2.25C11.8011 2.25 11.6103 2.32902 11.4697 2.46967C11.329 2.61032 11.25 2.80109 11.25 3V5.25C11.25 5.44891 11.329 5.63968 11.4697 5.78033C11.6103 5.92098 11.8011 6 12 6C12.1989 6 12.3897 5.92098 12.5303 5.78033C12.671 5.63968 12.75 5.44891 12.75 5.25V3.78367C14.3112 3.9263 15.7995 4.51081 17.0405 5.46877C18.2816 6.42672 19.2239 7.71844 19.7573 9.19266C20.2907 10.6669 20.393 12.2626 20.0522 13.7928C19.7114 15.3231 18.9417 16.7245 17.8331 17.8331C16.7245 18.9417 15.3231 19.7114 13.7928 20.0522C12.2626 20.393 10.6669 20.2907 9.19266 19.7573C7.71844 19.2239 6.42672 18.2816 5.46877 17.0405C4.51081 15.7995 3.9263 14.3112 3.78367 12.75H5.25C5.44891 12.75 5.63968 12.671 5.78033 12.5303C5.92098 12.3897 6 12.1989 6 12C6 11.8011 5.92098 11.6103 5.78033 11.4697C5.63968 11.329 5.44891 11.25 5.25 11.25H3C2.80109 11.25 2.61032 11.329 2.46967 11.4697C2.32902 11.6103 2.25 11.8011 2.25 12C2.25292 14.585 3.28108 17.0632 5.10893 18.8911C6.93678 20.7189 9.41503 21.7471 12 21.75Z" fill="#969BA0" />
            <path d="M10.5558 11.6164C10.5205 11.7413 10.5017 11.8702 10.4999 12C10.4999 12.2966 10.5879 12.5866 10.7527 12.8333C10.9176 13.08 11.1518 13.2722 11.4259 13.3858C11.7 13.4993 12.0016 13.529 12.2926 13.4711C12.5836 13.4133 12.8508 13.2704 13.0606 13.0606C13.2704 12.8508 13.4133 12.5836 13.4711 12.2926C13.529 12.0016 13.4993 11.7 13.3858 11.4259C13.2722 11.1518 13.08 10.9176 12.8333 10.7527C12.5866 10.5879 12.2966 10.4999 12 10.4999C11.8702 10.5017 11.7412 10.5205 11.6164 10.5559L6.15519 5.09469C6.08601 5.02306 6.00325 4.96592 5.91174 4.92661C5.82024 4.88731 5.72183 4.86662 5.62224 4.86575C5.52266 4.86489 5.4239 4.88386 5.33172 4.92157C5.23955 4.95928 5.15581 5.01497 5.08539 5.08539C5.01497 5.15581 4.95928 5.23955 4.92157 5.33172C4.88386 5.4239 4.86489 5.52266 4.86575 5.62224C4.86662 5.72183 4.88731 5.82024 4.92661 5.91174C4.96592 6.00325 5.02306 6.08601 5.09469 6.15519L10.5558 11.6164Z" fill="#969BA0" />
            <path d="M15.75 12C15.75 12.1989 15.829 12.3897 15.9697 12.5303C16.1103 12.671 16.3011 12.75 16.5 12.75H18C18.1989 12.75 18.3897 12.671 18.5303 12.5303C18.671 12.3897 18.75 12.1989 18.75 12C18.75 11.8011 18.671 11.6103 18.5303 11.4697C18.3897 11.329 18.1989 11.25 18 11.25H16.5C16.3011 11.25 16.1103 11.329 15.9697 11.4697C15.829 11.6103 15.75 11.8011 15.75 12Z" fill="#969BA0" />
            <path d="M15.7124 7.22678L14.6513 8.2875C14.5816 8.35714 14.5263 8.43981 14.4886 8.53081C14.4509 8.62181 14.4314 8.71935 14.4314 8.81786C14.4314 8.91637 14.4507 9.01393 14.4884 9.10495C14.5261 9.19598 14.5813 9.2787 14.6509 9.34838C14.7206 9.41806 14.8032 9.47335 14.8942 9.51108C14.9852 9.54881 15.0828 9.56825 15.1813 9.56828C15.2798 9.56832 15.3773 9.54895 15.4684 9.51128C15.5594 9.47361 15.6421 9.41839 15.7118 9.34875L16.7731 8.28825C16.8428 8.2186 16.8981 8.13591 16.9359 8.04489C16.9736 7.95387 16.993 7.85631 16.9931 7.75778C16.9931 7.65925 16.9737 7.56167 16.9361 7.47063C16.8984 7.37958 16.8432 7.29685 16.7735 7.22715C16.7039 7.15745 16.6212 7.10216 16.5301 7.06442C16.4391 7.02668 16.3416 7.00724 16.243 7.0072C16.1445 7.00717 16.0469 7.02654 15.9559 7.06421C15.8648 7.10189 15.7821 7.15713 15.7124 7.22678Z" fill="#969BA0" />
        </svg>,
        icon1: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 21.75C14.5859 21.75 17.0658 20.7228 18.8943 18.8943C20.7228 17.0658 21.75 14.5859 21.75 12C21.75 9.41414 20.7228 6.93419 18.8943 5.10571C17.0658 3.27723 14.5859 2.25 12 2.25C11.8011 2.25 11.6103 2.32902 11.4697 2.46967C11.329 2.61032 11.25 2.80109 11.25 3V5.25C11.25 5.44891 11.329 5.63968 11.4697 5.78033C11.6103 5.92098 11.8011 6 12 6C12.1989 6 12.3897 5.92098 12.5303 5.78033C12.671 5.63968 12.75 5.44891 12.75 5.25V3.78367C14.3112 3.9263 15.7995 4.51081 17.0405 5.46877C18.2816 6.42672 19.2239 7.71844 19.7573 9.19266C20.2907 10.6669 20.393 12.2626 20.0522 13.7928C19.7114 15.3231 18.9417 16.7245 17.8331 17.8331C16.7245 18.9417 15.3231 19.7114 13.7928 20.0522C12.2626 20.393 10.6669 20.2907 9.19266 19.7573C7.71844 19.2239 6.42672 18.2816 5.46877 17.0405C4.51081 15.7995 3.9263 14.3112 3.78367 12.75H5.25C5.44891 12.75 5.63968 12.671 5.78033 12.5303C5.92098 12.3897 6 12.1989 6 12C6 11.8011 5.92098 11.6103 5.78033 11.4697C5.63968 11.329 5.44891 11.25 5.25 11.25H3C2.80109 11.25 2.61032 11.329 2.46967 11.4697C2.32902 11.6103 2.25 11.8011 2.25 12C2.25292 14.585 3.28108 17.0632 5.10893 18.8911C6.93678 20.7189 9.41503 21.7471 12 21.75Z" fill="#2F4CDD" />
            <path d="M10.5558 11.6164C10.5205 11.7413 10.5017 11.8702 10.4999 12C10.4999 12.2966 10.5879 12.5866 10.7527 12.8333C10.9176 13.08 11.1518 13.2722 11.4259 13.3858C11.7 13.4993 12.0016 13.529 12.2926 13.4711C12.5836 13.4133 12.8508 13.2704 13.0606 13.0606C13.2704 12.8508 13.4133 12.5836 13.4711 12.2926C13.529 12.0016 13.4993 11.7 13.3858 11.4259C13.2722 11.1518 13.08 10.9176 12.8333 10.7527C12.5866 10.5879 12.2966 10.4999 12 10.4999C11.8702 10.5017 11.7412 10.5205 11.6164 10.5559L6.15519 5.09469C6.08601 5.02306 6.00325 4.96592 5.91174 4.92661C5.82024 4.88731 5.72183 4.86662 5.62224 4.86575C5.52266 4.86489 5.4239 4.88386 5.33172 4.92157C5.23955 4.95928 5.15581 5.01497 5.08539 5.08539C5.01497 5.15581 4.95928 5.23955 4.92157 5.33172C4.88386 5.4239 4.86489 5.52266 4.86575 5.62224C4.86662 5.72183 4.88731 5.82024 4.92661 5.91174C4.96592 6.00325 5.02306 6.08601 5.09469 6.15519L10.5558 11.6164Z" fill="#2F4CDD" />
            <path d="M15.75 12C15.75 12.1989 15.829 12.3897 15.9697 12.5303C16.1103 12.671 16.3011 12.75 16.5 12.75H18C18.1989 12.75 18.3897 12.671 18.5303 12.5303C18.671 12.3897 18.75 12.1989 18.75 12C18.75 11.8011 18.671 11.6103 18.5303 11.4697C18.3897 11.329 18.1989 11.25 18 11.25H16.5C16.3011 11.25 16.1103 11.329 15.9697 11.4697C15.829 11.6103 15.75 11.8011 15.75 12Z" fill="#2F4CDD" />
            <path d="M15.7124 7.22678L14.6513 8.2875C14.5816 8.35714 14.5263 8.43981 14.4886 8.53081C14.4509 8.62181 14.4314 8.71935 14.4314 8.81786C14.4314 8.91637 14.4507 9.01393 14.4884 9.10495C14.5261 9.19598 14.5813 9.2787 14.6509 9.34838C14.7206 9.41806 14.8032 9.47335 14.8942 9.51108C14.9852 9.54881 15.0828 9.56825 15.1813 9.56828C15.2798 9.56832 15.3773 9.54895 15.4684 9.51128C15.5594 9.47361 15.6421 9.41839 15.7118 9.34875L16.7731 8.28825C16.8428 8.2186 16.8981 8.13591 16.9359 8.04489C16.9736 7.95387 16.993 7.85631 16.9931 7.75778C16.9931 7.65925 16.9737 7.56167 16.9361 7.47063C16.8984 7.37958 16.8432 7.29685 16.7735 7.22715C16.7039 7.15745 16.6212 7.10216 16.5301 7.06442C16.4391 7.02668 16.3416 7.00724 16.243 7.0072C16.1445 7.00717 16.0469 7.02654 15.9559 7.06421C15.8648 7.10189 15.7821 7.15713 15.7124 7.22678Z" fill="#2F4CDD" />
        </svg>


    },
    {
        title: "Orders",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M17.25 22.5C17.8465 22.4993 18.4185 22.2621 18.8403 21.8403C19.2621 21.4185 19.4993 20.8465 19.5 20.25V17.2148C19.5 17.0159 19.421 16.8251 19.2803 16.6845C19.1397 16.5438 18.9489 16.4648 18.75 16.4648C18.5511 16.4648 18.3603 16.5438 18.2197 16.6845C18.079 16.8251 18 17.0159 18 17.2148V20.25C17.9998 20.4489 17.9207 20.6395 17.7801 20.7801C17.6395 20.9207 17.4489 20.9998 17.25 21H3.75C3.55114 20.9998 3.36048 20.9207 3.21987 20.7801C3.07925 20.6395 3.00018 20.4489 3 20.25V3.75C3.00018 3.55114 3.07925 3.36048 3.21987 3.21987C3.36048 3.07925 3.55114 3.00018 3.75 3H17.25C17.4489 3.00018 17.6395 3.07925 17.7801 3.21987C17.9207 3.36048 17.9998 3.55114 18 3.75V6.063C18 6.26191 18.079 6.45268 18.2197 6.59333C18.3603 6.73398 18.5511 6.813 18.75 6.813C18.9489 6.813 19.1397 6.73398 19.2803 6.59333C19.421 6.45268 19.5 6.26191 19.5 6.063V3.75C19.4993 3.15346 19.2621 2.58155 18.8403 2.15973C18.4185 1.73792 17.8465 1.50066 17.25 1.5H3.75C3.15346 1.50066 2.58155 1.73792 2.15973 2.15973C1.73792 2.58155 1.50066 3.15346 1.5 3.75V20.25C1.50066 20.8465 1.73792 21.4185 2.15973 21.8403C2.58155 22.2621 3.15346 22.4993 3.75 22.5H17.25Z" fill="#969BA0" />
            <path d="M5.25 14.25C5.05109 14.25 4.86032 14.329 4.71967 14.4697C4.57902 14.6103 4.5 14.8011 4.5 15C4.5 15.1989 4.57902 15.3897 4.71967 15.5303C4.86032 15.671 5.05109 15.75 5.25 15.75H8.25C8.44891 15.75 8.63968 15.671 8.78033 15.5303C8.92098 15.3897 9 15.1989 9 15C9 14.8011 8.92098 14.6103 8.78033 14.4697C8.63968 14.329 8.44891 14.25 8.25 14.25H5.25Z" fill="#969BA0" />
            <path d="M19.9548 7.92406C19.8142 7.78345 19.6234 7.70447 19.4246 7.70447C19.2257 7.70447 19.0349 7.78345 18.8943 7.92406L11.4698 15.3486C11.4001 15.4182 11.3448 15.5009 11.3071 15.5919C11.2694 15.6829 11.25 15.7804 11.25 15.8789V17.25H5.25C5.05109 17.25 4.86032 17.329 4.71967 17.4697C4.57902 17.6103 4.5 17.8011 4.5 18C4.5 18.1989 4.57902 18.3897 4.71967 18.5303C4.86032 18.671 5.05109 18.75 5.25 18.75H14.1215C14.3203 18.75 14.5111 18.6709 14.6517 18.5303L22.0767 11.1057C22.2173 10.9651 22.2963 10.7743 22.2963 10.5755C22.2963 10.3766 22.2173 10.1859 22.0767 10.0452L19.9548 7.92406ZM13.811 17.25H12.75V16.1894L19.4246 9.51488L20.4855 10.5755L13.811 17.25Z" fill="#969BA0" />
            <path d="M11.25 7.875C11.25 7.20749 11.0521 6.55497 10.6812 5.99995C10.3104 5.44494 9.78326 5.01235 9.16656 4.75691C8.54986 4.50146 7.87126 4.43463 7.21657 4.56485C6.56189 4.69508 5.96052 5.01651 5.48852 5.48852C5.01651 5.96052 4.69508 6.56189 4.56485 7.21657C4.43463 7.87126 4.50146 8.54986 4.75691 9.16656C5.01235 9.78326 5.44494 10.3104 5.99995 10.6812C6.55497 11.0521 7.20749 11.25 7.875 11.25C8.7698 11.249 9.62767 10.8931 10.2604 10.2604C10.8931 9.62767 11.249 8.7698 11.25 7.875ZM7.875 9.75C7.50416 9.75 7.14165 9.64003 6.83331 9.43401C6.52497 9.22798 6.28464 8.93514 6.14273 8.59253C6.00081 8.24992 5.96368 7.87292 6.03603 7.50921C6.10838 7.14549 6.28695 6.8114 6.54918 6.54918C6.8114 6.28695 7.14549 6.10838 7.50921 6.03603C7.87292 5.96368 8.24992 6.00081 8.59253 6.14273C8.93514 6.28464 9.22798 6.52497 9.43401 6.83331C9.64003 7.14165 9.75 7.50416 9.75 7.875C9.74949 8.37212 9.55178 8.84874 9.20026 9.20026C8.84874 9.55178 8.37212 9.74949 7.875 9.75Z" fill="#969BA0" />
        </svg>,
        icon1: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M17.25 22.5C17.8465 22.4993 18.4185 22.2621 18.8403 21.8403C19.2621 21.4185 19.4993 20.8465 19.5 20.25V17.2148C19.5 17.0159 19.421 16.8251 19.2803 16.6845C19.1397 16.5438 18.9489 16.4648 18.75 16.4648C18.5511 16.4648 18.3603 16.5438 18.2197 16.6845C18.079 16.8251 18 17.0159 18 17.2148V20.25C17.9998 20.4489 17.9207 20.6395 17.7801 20.7801C17.6395 20.9207 17.4489 20.9998 17.25 21H3.75C3.55114 20.9998 3.36048 20.9207 3.21987 20.7801C3.07925 20.6395 3.00018 20.4489 3 20.25V3.75C3.00018 3.55114 3.07925 3.36048 3.21987 3.21987C3.36048 3.07925 3.55114 3.00018 3.75 3H17.25C17.4489 3.00018 17.6395 3.07925 17.7801 3.21987C17.9207 3.36048 17.9998 3.55114 18 3.75V6.063C18 6.26191 18.079 6.45268 18.2197 6.59333C18.3603 6.73398 18.5511 6.813 18.75 6.813C18.9489 6.813 19.1397 6.73398 19.2803 6.59333C19.421 6.45268 19.5 6.26191 19.5 6.063V3.75C19.4993 3.15346 19.2621 2.58155 18.8403 2.15973C18.4185 1.73792 17.8465 1.50066 17.25 1.5H3.75C3.15346 1.50066 2.58155 1.73792 2.15973 2.15973C1.73792 2.58155 1.50066 3.15346 1.5 3.75V20.25C1.50066 20.8465 1.73792 21.4185 2.15973 21.8403C2.58155 22.2621 3.15346 22.4993 3.75 22.5H17.25Z" fill="#2F4CDD" />
            <path d="M5.25 14.25C5.05109 14.25 4.86032 14.329 4.71967 14.4697C4.57902 14.6103 4.5 14.8011 4.5 15C4.5 15.1989 4.57902 15.3897 4.71967 15.5303C4.86032 15.671 5.05109 15.75 5.25 15.75H8.25C8.44891 15.75 8.63968 15.671 8.78033 15.5303C8.92098 15.3897 9 15.1989 9 15C9 14.8011 8.92098 14.6103 8.78033 14.4697C8.63968 14.329 8.44891 14.25 8.25 14.25H5.25Z" fill="#2F4CDD" />
            <path d="M19.9548 7.92406C19.8142 7.78345 19.6234 7.70447 19.4246 7.70447C19.2257 7.70447 19.0349 7.78345 18.8943 7.92406L11.4698 15.3486C11.4001 15.4182 11.3448 15.5009 11.3071 15.5919C11.2694 15.6829 11.25 15.7804 11.25 15.8789V17.25H5.25C5.05109 17.25 4.86032 17.329 4.71967 17.4697C4.57902 17.6103 4.5 17.8011 4.5 18C4.5 18.1989 4.57902 18.3897 4.71967 18.5303C4.86032 18.671 5.05109 18.75 5.25 18.75H14.1215C14.3203 18.75 14.5111 18.6709 14.6517 18.5303L22.0767 11.1057C22.2173 10.9651 22.2963 10.7743 22.2963 10.5755C22.2963 10.3766 22.2173 10.1859 22.0767 10.0452L19.9548 7.92406ZM13.811 17.25H12.75V16.1894L19.4246 9.51488L20.4855 10.5755L13.811 17.25Z" fill="#2F4CDD" />
            <path d="M11.25 7.875C11.25 7.20749 11.0521 6.55497 10.6812 5.99995C10.3104 5.44494 9.78326 5.01235 9.16656 4.75691C8.54986 4.50146 7.87126 4.43463 7.21657 4.56485C6.56189 4.69508 5.96052 5.01651 5.48852 5.48852C5.01651 5.96052 4.69508 6.56189 4.56485 7.21657C4.43463 7.87126 4.50146 8.54986 4.75691 9.16656C5.01235 9.78326 5.44494 10.3104 5.99995 10.6812C6.55497 11.0521 7.20749 11.25 7.875 11.25C8.7698 11.249 9.62767 10.8931 10.2604 10.2604C10.8931 9.62767 11.249 8.7698 11.25 7.875ZM7.875 9.75C7.50416 9.75 7.14165 9.64003 6.83331 9.43401C6.52497 9.22798 6.28464 8.93514 6.14273 8.59253C6.00081 8.24992 5.96368 7.87292 6.03603 7.50921C6.10838 7.14549 6.28695 6.8114 6.54918 6.54918C6.8114 6.28695 7.14549 6.10838 7.50921 6.03603C7.87292 5.96368 8.24992 6.00081 8.59253 6.14273C8.93514 6.28464 9.22798 6.52497 9.43401 6.83331C9.64003 7.14165 9.75 7.50416 9.75 7.875C9.74949 8.37212 9.55178 8.84874 9.20026 9.20026C8.84874 9.55178 8.37212 9.74949 7.875 9.75Z" fill="#2F4CDD" />
        </svg>

    },
    {
        title: "Menus",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15.375 4.36819L12.375 2.63637C12.261 2.57054 12.1317 2.53589 12 2.53589C11.8683 2.53589 11.739 2.57054 11.625 2.63637L8.625 4.36819C8.51101 4.43401 8.41635 4.52866 8.35052 4.64264C8.2847 4.75662 8.25003 4.88592 8.25 5.01754V8.07252L5.32913 13.9143C5.30706 13.9685 5.29167 14.0253 5.2833 14.0833L2.625 15.6182C2.51101 15.684 2.41635 15.7786 2.35052 15.8926C2.2847 16.0066 2.25003 16.1359 2.25 16.2675V19.7325C2.24998 19.8642 2.28462 19.9936 2.35045 20.1076C2.41628 20.2216 2.51097 20.3163 2.625 20.3822L5.625 22.114C5.73904 22.1798 5.86836 22.2144 6 22.2144C6.13164 22.2144 6.26096 22.1798 6.375 22.114L9.375 20.3822C9.48903 20.3163 9.58372 20.2216 9.64955 20.1076C9.71538 19.9936 9.75002 19.8642 9.75 19.7325V18.75H14.25V19.7325C14.25 19.8642 14.2846 19.9936 14.3504 20.1076C14.4163 20.2216 14.511 20.3163 14.625 20.3822L17.625 22.114C17.739 22.1798 17.8684 22.2144 18 22.2144C18.1316 22.2144 18.261 22.1798 18.375 22.114L21.375 20.3822C21.489 20.3163 21.5837 20.2216 21.6496 20.1076C21.7154 19.9936 21.75 19.8642 21.75 19.7325V16.2675C21.75 16.1359 21.7154 16.0065 21.6496 15.8925C21.5837 15.7784 21.489 15.6837 21.375 15.6179L18.7167 14.0833C18.7083 14.0253 18.6929 13.9685 18.6709 13.9143L15.75 8.07281V5.01754C15.75 4.88592 15.7153 4.75662 15.6495 4.64264C15.5837 4.52866 15.489 4.43401 15.375 4.36819ZM9.75 5.45112L12 4.15212L14.25 5.45112V8.04897L12 9.34796L9.75 8.04897V5.45112ZM8.25 19.299L6 20.598L3.75 19.299V16.7011L6 15.4021L8.25 16.7011V19.299ZM9.75 17.25V16.2675C9.75002 16.1359 9.71538 16.0065 9.64955 15.8925C9.58372 15.7784 9.48903 15.6837 9.375 15.6179L6.87585 14.1755L9.225 9.47801L11.625 10.8637C11.739 10.9295 11.8684 10.9641 12 10.9641C12.1316 10.9641 12.261 10.9295 12.375 10.8637L14.7754 9.47801L17.1241 14.1755L14.625 15.6182C14.511 15.684 14.4163 15.7787 14.3504 15.8928C14.2846 16.0068 14.25 16.1362 14.25 16.2678V17.25H9.75ZM20.25 19.299L18 20.598L15.75 19.299V16.7011L18 15.4021L20.25 16.7011V19.299Z" fill="#969BA0" />
        </svg>,
        icon1: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15.375 4.36819L12.375 2.63637C12.261 2.57054 12.1317 2.53589 12 2.53589C11.8683 2.53589 11.739 2.57054 11.625 2.63637L8.625 4.36819C8.51101 4.43401 8.41635 4.52866 8.35052 4.64264C8.2847 4.75662 8.25003 4.88592 8.25 5.01754V8.07252L5.32913 13.9143C5.30706 13.9685 5.29167 14.0253 5.2833 14.0833L2.625 15.6182C2.51101 15.684 2.41635 15.7786 2.35052 15.8926C2.2847 16.0066 2.25003 16.1359 2.25 16.2675V19.7325C2.24998 19.8642 2.28462 19.9936 2.35045 20.1076C2.41628 20.2216 2.51097 20.3163 2.625 20.3822L5.625 22.114C5.73904 22.1798 5.86836 22.2144 6 22.2144C6.13164 22.2144 6.26096 22.1798 6.375 22.114L9.375 20.3822C9.48903 20.3163 9.58372 20.2216 9.64955 20.1076C9.71538 19.9936 9.75002 19.8642 9.75 19.7325V18.75H14.25V19.7325C14.25 19.8642 14.2846 19.9936 14.3504 20.1076C14.4163 20.2216 14.511 20.3163 14.625 20.3822L17.625 22.114C17.739 22.1798 17.8684 22.2144 18 22.2144C18.1316 22.2144 18.261 22.1798 18.375 22.114L21.375 20.3822C21.489 20.3163 21.5837 20.2216 21.6496 20.1076C21.7154 19.9936 21.75 19.8642 21.75 19.7325V16.2675C21.75 16.1359 21.7154 16.0065 21.6496 15.8925C21.5837 15.7784 21.489 15.6837 21.375 15.6179L18.7167 14.0833C18.7083 14.0253 18.6929 13.9685 18.6709 13.9143L15.75 8.07281V5.01754C15.75 4.88592 15.7153 4.75662 15.6495 4.64264C15.5837 4.52866 15.489 4.43401 15.375 4.36819ZM9.75 5.45112L12 4.15212L14.25 5.45112V8.04897L12 9.34796L9.75 8.04897V5.45112ZM8.25 19.299L6 20.598L3.75 19.299V16.7011L6 15.4021L8.25 16.7011V19.299ZM9.75 17.25V16.2675C9.75002 16.1359 9.71538 16.0065 9.64955 15.8925C9.58372 15.7784 9.48903 15.6837 9.375 15.6179L6.87585 14.1755L9.225 9.47801L11.625 10.8637C11.739 10.9295 11.8684 10.9641 12 10.9641C12.1316 10.9641 12.261 10.9295 12.375 10.8637L14.7754 9.47801L17.1241 14.1755L14.625 15.6182C14.511 15.684 14.4163 15.7787 14.3504 15.8928C14.2846 16.0068 14.25 16.1362 14.25 16.2678V17.25H9.75ZM20.25 19.299L18 20.598L15.75 19.299V16.7011L18 15.4021L20.25 16.7011V19.299Z" fill="#2F4CDD" />
        </svg>

    },
    {
        title: "Customers",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9.75 12.75C10.3433 12.75 10.9234 12.5741 11.4167 12.2444C11.9101 11.9148 12.2946 11.4462 12.5216 10.8981C12.7487 10.3499 12.8081 9.74667 12.6924 9.16473C12.5766 8.58279 12.2909 8.04824 11.8713 7.62868C11.4518 7.20912 10.9172 6.9234 10.3353 6.80765C9.75333 6.69189 9.15013 6.7513 8.60195 6.97836C8.05377 7.20543 7.58524 7.58994 7.25559 8.08329C6.92595 8.57664 6.75 9.15666 6.75 9.75C6.75077 10.5454 7.06709 11.308 7.62954 11.8705C8.19198 12.4329 8.95459 12.7492 9.75 12.75ZM9.75 8.25C10.0467 8.25 10.3367 8.33798 10.5834 8.5028C10.83 8.66762 11.0223 8.90189 11.1358 9.17598C11.2494 9.45007 11.2791 9.75167 11.2212 10.0426C11.1633 10.3336 11.0204 10.6009 10.8107 10.8107C10.6009 11.0204 10.3336 11.1633 10.0426 11.2212C9.75166 11.2791 9.45006 11.2494 9.17598 11.1358C8.90189 11.0223 8.66762 10.83 8.5028 10.5834C8.33797 10.3367 8.25 10.0467 8.25 9.75C8.25054 9.35234 8.40874 8.97112 8.68993 8.68993C8.97112 8.40874 9.35234 8.25054 9.75 8.25Z" fill="#969BA0" />
            <path d="M21.4681 14.6775C21.7157 14.3459 21.8811 13.9603 21.9507 13.5524C22.0204 13.1444 21.9923 12.7258 21.8687 12.3308L21.3926 10.7818C21.1691 10.0471 20.7147 9.40402 20.0968 8.94796C19.4789 8.4919 18.7305 8.24716 17.9626 8.25002H14.5972C14.3983 8.25002 14.2076 8.32904 14.0669 8.46969C13.9263 8.61035 13.8472 8.80111 13.8472 9.00002C13.8472 9.19894 13.9263 9.3897 14.0669 9.53035C14.2076 9.67101 14.3983 9.75002 14.5972 9.75002H17.9626C18.4094 9.74849 18.8449 9.891 19.2044 10.1564C19.5639 10.4219 19.8283 10.7961 19.9584 11.2236L20.4345 12.772C20.487 12.9428 20.4988 13.1235 20.4688 13.2997C20.4387 13.4758 20.3678 13.6425 20.2617 13.7862C20.1556 13.93 20.0172 14.0468 19.8577 14.1274C19.6982 14.2079 19.522 14.2499 19.3433 14.25H12.4666C12.4454 14.25 12.4276 14.2603 12.4066 14.2621C12.3562 14.2601 12.3076 14.25 12.2564 14.25H7.55392C6.72048 14.247 5.90828 14.5128 5.23788 15.0079C4.56748 15.5031 4.07463 16.2013 3.83249 16.9988L3.27254 18.8175C3.14175 19.2431 3.11263 19.6935 3.18754 20.1324C3.26244 20.5714 3.43927 20.9866 3.70382 21.3448C3.96837 21.7029 4.31326 21.994 4.71076 22.1947C5.10827 22.3953 5.5473 22.4999 5.99257 22.5H13.8172C14.2625 22.4999 14.7016 22.3954 15.0991 22.1948C15.4967 21.9941 15.8416 21.703 16.1062 21.3449C16.3708 20.9867 16.5476 20.5715 16.6226 20.1325C16.6975 19.6936 16.6684 19.2432 16.5376 18.8175L15.978 16.9989C15.8362 16.546 15.6131 16.1228 15.3194 15.75H19.3433C19.757 15.7519 20.1653 15.6557 20.5347 15.4693C20.904 15.2829 21.2239 15.0115 21.4681 14.6775ZM14.8997 20.4534C14.7753 20.6236 14.6124 20.7619 14.4242 20.8569C14.236 20.9519 14.028 21.0009 13.8172 21H5.99257C5.78196 21 5.57431 20.9505 5.3863 20.8556C5.19829 20.7607 5.03517 20.6231 4.91007 20.4536C4.78497 20.2842 4.70138 20.0878 4.66602 19.8802C4.63065 19.6726 4.64451 19.4596 4.70647 19.2583L5.26604 17.4397C5.4147 16.9494 5.7176 16.5201 6.12972 16.2157C6.54184 15.9113 7.04118 15.748 7.55354 15.75H12.256C12.7684 15.748 13.2677 15.9113 13.6798 16.2157C14.092 16.5201 14.3949 16.9494 14.5435 17.4397L15.1031 19.2583C15.1662 19.4594 15.1807 19.6726 15.1453 19.8804C15.11 20.0883 15.0258 20.2847 14.8997 20.4536V20.4534Z" fill="#969BA0" />
            <path d="M16.125 6.74999C16.6442 6.74999 17.1517 6.59604 17.5834 6.3076C18.015 6.01916 18.3515 5.6092 18.5502 5.12954C18.7489 4.64988 18.8008 4.12209 18.6996 3.61289C18.5983 3.10369 18.3483 2.63596 17.9812 2.26884C17.614 1.90173 17.1463 1.65173 16.6371 1.55044C16.1279 1.44915 15.6001 1.50114 15.1205 1.69982C14.6408 1.8985 14.2308 2.23495 13.9424 2.66663C13.654 3.09831 13.5 3.60582 13.5 4.125C13.5008 4.82093 13.7777 5.48813 14.2698 5.98023C14.7619 6.47233 15.4291 6.74916 16.125 6.74999ZM16.125 3C16.3475 3 16.565 3.06598 16.75 3.1896C16.935 3.31321 17.0792 3.48891 17.1644 3.69448C17.2495 3.90005 17.2718 4.12625 17.2284 4.34447C17.185 4.5627 17.0778 4.76316 16.9205 4.92049C16.7632 5.07783 16.5627 5.18497 16.3445 5.22838C16.1262 5.27179 15.9 5.24951 15.6945 5.16436C15.4889 5.07921 15.3132 4.93502 15.1896 4.75001C15.066 4.56501 15 4.3475 15 4.125C15.0003 3.82673 15.119 3.54078 15.3299 3.32988C15.5408 3.11897 15.8267 3.00034 16.125 3Z" fill="#969BA0" />
        </svg>,
        icon1: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9.75 12.75C10.3433 12.75 10.9234 12.5741 11.4167 12.2444C11.9101 11.9148 12.2946 11.4462 12.5216 10.8981C12.7487 10.3499 12.8081 9.74667 12.6924 9.16473C12.5766 8.58279 12.2909 8.04824 11.8713 7.62868C11.4518 7.20912 10.9172 6.9234 10.3353 6.80765C9.75333 6.69189 9.15013 6.7513 8.60195 6.97836C8.05377 7.20543 7.58524 7.58994 7.25559 8.08329C6.92595 8.57664 6.75 9.15666 6.75 9.75C6.75077 10.5454 7.06709 11.308 7.62954 11.8705C8.19198 12.4329 8.95459 12.7492 9.75 12.75ZM9.75 8.25C10.0467 8.25 10.3367 8.33798 10.5834 8.5028C10.83 8.66762 11.0223 8.90189 11.1358 9.17598C11.2494 9.45007 11.2791 9.75167 11.2212 10.0426C11.1633 10.3336 11.0204 10.6009 10.8107 10.8107C10.6009 11.0204 10.3336 11.1633 10.0426 11.2212C9.75166 11.2791 9.45006 11.2494 9.17598 11.1358C8.90189 11.0223 8.66762 10.83 8.5028 10.5834C8.33797 10.3367 8.25 10.0467 8.25 9.75C8.25054 9.35234 8.40874 8.97112 8.68993 8.68993C8.97112 8.40874 9.35234 8.25054 9.75 8.25Z" fill="#2F4CDD" />
            <path d="M21.4681 14.6775C21.7157 14.3459 21.8811 13.9603 21.9507 13.5524C22.0204 13.1444 21.9923 12.7258 21.8687 12.3308L21.3926 10.7818C21.1691 10.0471 20.7147 9.40402 20.0968 8.94796C19.4789 8.4919 18.7305 8.24716 17.9626 8.25002H14.5972C14.3983 8.25002 14.2076 8.32904 14.0669 8.46969C13.9263 8.61035 13.8472 8.80111 13.8472 9.00002C13.8472 9.19894 13.9263 9.3897 14.0669 9.53035C14.2076 9.67101 14.3983 9.75002 14.5972 9.75002H17.9626C18.4094 9.74849 18.8449 9.891 19.2044 10.1564C19.5639 10.4219 19.8283 10.7961 19.9584 11.2236L20.4345 12.772C20.487 12.9428 20.4988 13.1235 20.4688 13.2997C20.4387 13.4758 20.3678 13.6425 20.2617 13.7862C20.1556 13.93 20.0172 14.0468 19.8577 14.1274C19.6982 14.2079 19.522 14.2499 19.3433 14.25H12.4666C12.4454 14.25 12.4276 14.2603 12.4066 14.2621C12.3562 14.2601 12.3076 14.25 12.2564 14.25H7.55392C6.72048 14.247 5.90828 14.5128 5.23788 15.0079C4.56748 15.5031 4.07463 16.2013 3.83249 16.9988L3.27254 18.8175C3.14175 19.2431 3.11263 19.6935 3.18754 20.1324C3.26244 20.5714 3.43927 20.9866 3.70382 21.3448C3.96837 21.7029 4.31326 21.994 4.71076 22.1947C5.10827 22.3953 5.5473 22.4999 5.99257 22.5H13.8172C14.2625 22.4999 14.7016 22.3954 15.0991 22.1948C15.4967 21.9941 15.8416 21.703 16.1062 21.3449C16.3708 20.9867 16.5476 20.5715 16.6226 20.1325C16.6975 19.6936 16.6684 19.2432 16.5376 18.8175L15.978 16.9989C15.8362 16.546 15.6131 16.1228 15.3194 15.75H19.3433C19.757 15.7519 20.1653 15.6557 20.5347 15.4693C20.904 15.2829 21.2239 15.0115 21.4681 14.6775ZM14.8997 20.4534C14.7753 20.6236 14.6124 20.7619 14.4242 20.8569C14.236 20.9519 14.028 21.0009 13.8172 21H5.99257C5.78196 21 5.57431 20.9505 5.3863 20.8556C5.19829 20.7607 5.03517 20.6231 4.91007 20.4536C4.78497 20.2842 4.70138 20.0878 4.66602 19.8802C4.63065 19.6726 4.64451 19.4596 4.70647 19.2583L5.26604 17.4397C5.4147 16.9494 5.7176 16.5201 6.12972 16.2157C6.54184 15.9113 7.04118 15.748 7.55354 15.75H12.256C12.7684 15.748 13.2677 15.9113 13.6798 16.2157C14.092 16.5201 14.3949 16.9494 14.5435 17.4397L15.1031 19.2583C15.1662 19.4594 15.1807 19.6726 15.1453 19.8804C15.11 20.0883 15.0258 20.2847 14.8997 20.4536V20.4534Z" fill="#2F4CDD" />
            <path d="M16.125 6.74999C16.6442 6.74999 17.1517 6.59604 17.5834 6.3076C18.015 6.01916 18.3515 5.6092 18.5502 5.12954C18.7489 4.64988 18.8008 4.12209 18.6996 3.61289C18.5983 3.10369 18.3483 2.63596 17.9812 2.26884C17.614 1.90173 17.1463 1.65173 16.6371 1.55044C16.1279 1.44915 15.6001 1.50114 15.1205 1.69982C14.6408 1.8985 14.2308 2.23495 13.9424 2.66663C13.654 3.09831 13.5 3.60582 13.5 4.125C13.5008 4.82093 13.7777 5.48813 14.2698 5.98023C14.7619 6.47233 15.4291 6.74916 16.125 6.74999ZM16.125 3C16.3475 3 16.565 3.06598 16.75 3.1896C16.935 3.31321 17.0792 3.48891 17.1644 3.69448C17.2495 3.90005 17.2718 4.12625 17.2284 4.34447C17.185 4.5627 17.0778 4.76316 16.9205 4.92049C16.7632 5.07783 16.5627 5.18497 16.3445 5.22838C16.1262 5.27179 15.9 5.24951 15.6945 5.16436C15.4889 5.07921 15.3132 4.93502 15.1896 4.75001C15.066 4.56501 15 4.3475 15 4.125C15.0003 3.82673 15.119 3.54078 15.3299 3.32988C15.5408 3.11897 15.8267 3.00034 16.125 3Z" fill="#2F4CDD" />
        </svg>
    },
    {
        title: "Analytics",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M21.75 9.75H16.5V3.75C16.4993 3.15346 16.2621 2.58155 15.8403 2.15973C15.4185 1.73792 14.8465 1.50066 14.25 1.5H3.75C3.15346 1.50066 2.58155 1.73792 2.15973 2.15973C1.73792 2.58155 1.50066 3.15346 1.5 3.75V20.25C1.50066 20.8465 1.73792 21.4185 2.15973 21.8403C2.58155 22.2621 3.15346 22.4993 3.75 22.5H18.75C19.7442 22.4988 20.6973 22.1034 21.4004 21.4004C22.1034 20.6973 22.4988 19.7442 22.5 18.75V10.5C22.5 10.3011 22.421 10.1103 22.2803 9.96967C22.1397 9.82902 21.9489 9.75 21.75 9.75ZM3 20.25V3.75C3.00018 3.55114 3.07925 3.36048 3.21987 3.21987C3.36048 3.07925 3.55114 3.00018 3.75 3H14.25C14.4489 3.00018 14.6395 3.07925 14.7801 3.21987C14.9207 3.36048 14.9998 3.55114 15 3.75V21H3.75C3.55114 20.9998 3.36048 20.9207 3.21987 20.7801C3.07925 20.6395 3.00018 20.4489 3 20.25ZM21 18.75C20.9993 19.3465 20.7621 19.9185 20.3403 20.3403C19.9185 20.7621 19.3465 20.9993 18.75 21H16.5V11.25H21V18.75Z" fill="#969BA0" />
            <path d="M12.3001 6.15L9.72416 8.0814L7.91613 6.876C7.7929 6.79395 7.64815 6.75017 7.50011 6.75017C7.35206 6.75017 7.20731 6.79395 7.08408 6.876L4.83408 8.376C4.75115 8.4302 4.67978 8.50029 4.62409 8.58223C4.5684 8.66416 4.5295 8.75632 4.50963 8.85338C4.48976 8.95043 4.48931 9.05047 4.50832 9.14769C4.52732 9.24492 4.5654 9.33742 4.62036 9.41985C4.67532 9.50228 4.74606 9.57301 4.8285 9.62794C4.91094 9.68288 5.00345 9.72094 5.10069 9.73992C5.19792 9.7589 5.29795 9.75843 5.39501 9.73853C5.49206 9.71864 5.58421 9.67971 5.66613 9.624L7.50011 8.40127L9.33408 9.62378C9.46306 9.71017 9.61571 9.7543 9.77089 9.75004C9.92607 9.74578 10.0761 9.69334 10.2001 9.6L13.2001 7.35C13.2789 7.29091 13.3453 7.21687 13.3955 7.13212C13.4457 7.04737 13.4786 6.95357 13.4926 6.85607C13.5065 6.75856 13.5011 6.65927 13.4767 6.56386C13.4522 6.46845 13.4092 6.37879 13.3501 6.3C13.291 6.22121 13.217 6.15482 13.1322 6.10464C13.0475 6.05446 12.9537 6.02147 12.8562 6.00754C12.7587 5.99361 12.6594 5.99902 12.564 6.02346C12.4686 6.04791 12.3789 6.0909 12.3001 6.15Z" fill="#969BA0" />
            <path d="M5.25 14.25H9C9.19891 14.25 9.38968 14.171 9.53033 14.0303C9.67098 13.8897 9.75 13.6989 9.75 13.5C9.75 13.3011 9.67098 13.1103 9.53033 12.9697C9.38968 12.829 9.19891 12.75 9 12.75H5.25C5.05109 12.75 4.86032 12.829 4.71967 12.9697C4.57902 13.1103 4.5 13.3011 4.5 13.5C4.5 13.6989 4.57902 13.8897 4.71967 14.0303C4.86032 14.171 5.05109 14.25 5.25 14.25Z" fill="#969BA0" />
            <path d="M12 15.75H5.25C5.05109 15.75 4.86032 15.829 4.71967 15.9697C4.57902 16.1103 4.5 16.3011 4.5 16.5C4.5 16.6989 4.57902 16.8897 4.71967 17.0303C4.86032 17.171 5.05109 17.25 5.25 17.25H12C12.1989 17.25 12.3897 17.171 12.5303 17.0303C12.671 16.8897 12.75 16.6989 12.75 16.5C12.75 16.3011 12.671 16.1103 12.5303 15.9697C12.3897 15.829 12.1989 15.75 12 15.75Z" fill="#969BA0" />
        </svg>,
        icon1: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M21.75 9.75H16.5V3.75C16.4993 3.15346 16.2621 2.58155 15.8403 2.15973C15.4185 1.73792 14.8465 1.50066 14.25 1.5H3.75C3.15346 1.50066 2.58155 1.73792 2.15973 2.15973C1.73792 2.58155 1.50066 3.15346 1.5 3.75V20.25C1.50066 20.8465 1.73792 21.4185 2.15973 21.8403C2.58155 22.2621 3.15346 22.4993 3.75 22.5H18.75C19.7442 22.4988 20.6973 22.1034 21.4004 21.4004C22.1034 20.6973 22.4988 19.7442 22.5 18.75V10.5C22.5 10.3011 22.421 10.1103 22.2803 9.96967C22.1397 9.82902 21.9489 9.75 21.75 9.75ZM3 20.25V3.75C3.00018 3.55114 3.07925 3.36048 3.21987 3.21987C3.36048 3.07925 3.55114 3.00018 3.75 3H14.25C14.4489 3.00018 14.6395 3.07925 14.7801 3.21987C14.9207 3.36048 14.9998 3.55114 15 3.75V21H3.75C3.55114 20.9998 3.36048 20.9207 3.21987 20.7801C3.07925 20.6395 3.00018 20.4489 3 20.25ZM21 18.75C20.9993 19.3465 20.7621 19.9185 20.3403 20.3403C19.9185 20.7621 19.3465 20.9993 18.75 21H16.5V11.25H21V18.75Z" fill="#2F4CDD" />
            <path d="M12.3001 6.15L9.72416 8.0814L7.91613 6.876C7.7929 6.79395 7.64815 6.75017 7.50011 6.75017C7.35206 6.75017 7.20731 6.79395 7.08408 6.876L4.83408 8.376C4.75115 8.4302 4.67978 8.50029 4.62409 8.58223C4.5684 8.66416 4.5295 8.75632 4.50963 8.85338C4.48976 8.95043 4.48931 9.05047 4.50832 9.14769C4.52732 9.24492 4.5654 9.33742 4.62036 9.41985C4.67532 9.50228 4.74606 9.57301 4.8285 9.62794C4.91094 9.68288 5.00345 9.72094 5.10069 9.73992C5.19792 9.7589 5.29795 9.75843 5.39501 9.73853C5.49206 9.71864 5.58421 9.67971 5.66613 9.624L7.50011 8.40127L9.33408 9.62378C9.46306 9.71017 9.61571 9.7543 9.77089 9.75004C9.92607 9.74578 10.0761 9.69334 10.2001 9.6L13.2001 7.35C13.2789 7.29091 13.3453 7.21687 13.3955 7.13212C13.4457 7.04737 13.4786 6.95357 13.4926 6.85607C13.5065 6.75856 13.5011 6.65927 13.4767 6.56386C13.4522 6.46845 13.4092 6.37879 13.3501 6.3C13.291 6.22121 13.217 6.15482 13.1322 6.10464C13.0475 6.05446 12.9537 6.02147 12.8562 6.00754C12.7587 5.99361 12.6594 5.99902 12.564 6.02346C12.4686 6.04791 12.3789 6.0909 12.3001 6.15Z" fill="#2F4CDD" />
            <path d="M5.25 14.25H9C9.19891 14.25 9.38968 14.171 9.53033 14.0303C9.67098 13.8897 9.75 13.6989 9.75 13.5C9.75 13.3011 9.67098 13.1103 9.53033 12.9697C9.38968 12.829 9.19891 12.75 9 12.75H5.25C5.05109 12.75 4.86032 12.829 4.71967 12.9697C4.57902 13.1103 4.5 13.3011 4.5 13.5C4.5 13.6989 4.57902 13.8897 4.71967 14.0303C4.86032 14.171 5.05109 14.25 5.25 14.25Z" fill="#2F4CDD" />
            <path d="M12 15.75H5.25C5.05109 15.75 4.86032 15.829 4.71967 15.9697C4.57902 16.1103 4.5 16.3011 4.5 16.5C4.5 16.6989 4.57902 16.8897 4.71967 17.0303C4.86032 17.171 5.05109 17.25 5.25 17.25H12C12.1989 17.25 12.3897 17.171 12.5303 17.0303C12.671 16.8897 12.75 16.6989 12.75 16.5C12.75 16.3011 12.671 16.1103 12.5303 15.9697C12.3897 15.829 12.1989 15.75 12 15.75Z" fill="#2F4CDD" />
        </svg>

    }
]

// -------------------- End of Sidebar buttons text and icons---------------------

// --------------------Start of sidebar subbuttons ---------------------

const sidebarSubuttons_1 = [
    {
        title: "Breakfast"
    },
    {
        title: "Dinner"
    },
    {
        title: "Lunch"
    },
]

const sidebarSubuttons_2 = [
    {
        title: "Add New"
    },
    {
        title: "Members"
    },
    {
        title: "General Customers"
    },


]

// --------------------End of sidebar subbuttons ---------------------

export { sidebarButtons, sidebarSubuttons_1, sidebarSubuttons_2 }