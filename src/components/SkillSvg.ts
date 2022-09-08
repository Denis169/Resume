class SkillSvg {
  jsSvg() {
    return `
      <svg width="32px" height="32px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 2v28h28v-28zM17.238 23.837c0 2.725-1.6 3.969-3.931 3.969-2.106 0-3.325-1.087-3.95-2.406l2.144-1.294c0.413 0.731 0.788 1.35 1.694 1.35 0.862 0 1.412-0.338 1.412-1.656v-8.944h2.631zM23.462 27.806c-2.444 0-4.025-1.162-4.794-2.688l2.144-1.237c0.563 0.919 1.3 1.6 2.594 1.6 1.087 0 1.788-0.544 1.788-1.3 0-0.9-0.713-1.219-1.919-1.75l-0.656-0.281c-1.9-0.806-3.156-1.825-3.156-3.969 0-1.975 1.506-3.475 3.85-3.475 1.675 0 2.875 0.581 3.738 2.106l-2.050 1.313c-0.45-0.806-0.938-1.125-1.694-1.125-0.768 0-1.256 0.488-1.256 1.125 0 0.788 0.488 1.106 1.619 1.6l0.656 0.281c2.238 0.956 3.494 1.938 3.494 4.137 0 2.363-1.863 3.662-4.357 3.662z"/>
      </svg>
    `;
  }

  reactSvg() {
    return `
    <svg width="32px" height="32px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <path d="M 11.404297 3.359375 C 10.558989 3.3033199 9.7282187 3.4545628 9 3.875 C 8.0290418 4.435583 7.3824561 5.3924554 7.0351562 6.4941406 C 6.6878566 7.5958258 6.6075884 8.8654625 6.734375 10.251953 C 6.7472175 10.392393 6.7719235 10.538778 6.7890625 10.681641 C 6.6565239 10.738327 6.516949 10.790405 6.3886719 10.849609 C 5.1245423 11.433054 4.0655937 12.136668 3.2851562 12.988281 C 2.5047189 13.839894 2 14.878834 2 16 C 2 17.121166 2.5047188 18.160106 3.2851562 19.011719 C 4.0655937 19.863332 5.1245423 20.566946 6.3886719 21.150391 C 6.516949 21.209595 6.6565239 21.261673 6.7890625 21.318359 C 6.7719235 21.461222 6.7472175 21.607607 6.734375 21.748047 C 6.6075884 23.134538 6.6878566 24.404174 7.0351562 25.505859 C 7.3824561 26.607544 8.0290418 27.564417 9 28.125 C 9.9709582 28.685583 11.122263 28.76765 12.25 28.517578 C 13.377738 28.267506 14.516954 27.701483 15.654297 26.898438 C 15.769442 26.817137 15.884905 26.722947 16 26.636719 C 16.115095 26.722947 16.230558 26.817137 16.345703 26.898438 C 17.483046 27.701483 18.622262 28.267506 19.75 28.517578 C 20.877737 28.76765 22.029042 28.685583 23 28.125 C 23.970958 27.564417 24.617544 26.607544 24.964844 25.505859 C 25.312144 24.404174 25.392412 23.134538 25.265625 21.748047 C 25.252783 21.607607 25.228076 21.461222 25.210938 21.318359 C 25.343476 21.261673 25.483051 21.209595 25.611328 21.150391 C 26.875458 20.566946 27.934406 19.863332 28.714844 19.011719 C 29.495281 18.160106 30 17.121166 30 16 C 30 14.878834 29.495281 13.839894 28.714844 12.988281 C 27.934406 12.136668 26.875458 11.433054 25.611328 10.849609 C 25.483051 10.790405 25.343476 10.738327 25.210938 10.681641 C 25.228076 10.538778 25.252783 10.392393 25.265625 10.251953 C 25.392412 8.8654622 25.312144 7.5958262 24.964844 6.4941406 C 24.617544 5.3924558 23.970958 4.435583 23 3.875 C 22.029042 3.314417 20.877737 3.2323501 19.75 3.4824219 C 18.622262 3.7324945 17.483046 4.2985163 16.345703 5.1015625 C 16.230558 5.1828631 16.115095 5.2770534 16 5.3632812 C 15.884905 5.2770534 15.769442 5.1828632 15.654297 5.1015625 C 14.516954 4.2985167 13.377738 3.7324941 12.25 3.4824219 C 11.968066 3.4199038 11.686066 3.37806 11.404297 3.359375 z M 11.273438 5.3515625 C 11.44385 5.3643925 11.625005 5.3926711 11.818359 5.4355469 C 12.574044 5.6031175 13.479049 6.027269 14.433594 6.6914062 C 13.638579 7.445577 12.856199 8.3035536 12.109375 9.2636719 C 10.905846 9.4303655 9.7722189 9.6771858 8.7226562 9.9882812 C 8.6249172 8.8300209 8.708758 7.8336973 8.9414062 7.0957031 C 9.1795887 6.3401532 9.5360797 5.8752664 10 5.6074219 C 10.34794 5.4065385 10.762201 5.3130725 11.273438 5.3515625 z M 20.726562 5.3515625 C 21.237799 5.3130724 21.65206 5.4065385 22 5.6074219 C 22.46392 5.8752664 22.820412 6.3401534 23.058594 7.0957031 C 23.291242 7.8336973 23.375082 8.830021 23.277344 9.9882812 C 22.227781 9.6771858 21.094154 9.4303655 19.890625 9.2636719 C 19.143801 8.3035536 18.361421 7.445577 17.566406 6.6914062 C 18.520951 6.0272696 19.425956 5.6031175 20.181641 5.4355469 C 20.374995 5.3926712 20.556151 5.3643925 20.726562 5.3515625 z M 16 7.9589844 C 16.351492 8.2839608 16.702356 8.645337 17.052734 9.0234375 C 16.704015 9.0111056 16.355492 9 16 9 C 15.644508 9 15.295985 9.0111056 14.947266 9.0234375 C 15.297644 8.645337 15.648508 8.2839609 16 7.9589844 z M 16 11 C 16.964537 11 17.899388 11.05672 18.798828 11.152344 C 19.331359 11.883468 19.847811 12.66469 20.330078 13.5 C 20.81238 14.335371 21.230731 15.173194 21.597656 16 C 21.230731 16.826806 20.81238 17.664629 20.330078 18.5 C 19.847811 19.33531 19.331359 20.116532 18.798828 20.847656 C 17.899388 20.94328 16.964537 21 16 21 C 15.035463 21 14.100612 20.94328 13.201172 20.847656 C 12.668641 20.116532 12.152189 19.33531 11.669922 18.5 C 11.18762 17.664629 10.769268 16.826806 10.402344 16 C 10.769268 15.173194 11.18762 14.335371 11.669922 13.5 C 12.152189 12.66469 12.668641 11.883468 13.201172 11.152344 C 14.100612 11.05672 15.035463 11 16 11 z M 10.484375 11.599609 C 10.299345 11.895429 10.115237 12.192151 9.9375 12.5 C 9.7597627 12.80785 9.5953134 13.115677 9.4316406 13.423828 C 9.2796229 12.932067 9.1426994 12.44671 9.0371094 11.980469 C 9.4941217 11.838603 9.981943 11.71397 10.484375 11.599609 z M 21.515625 11.599609 C 22.018057 11.71397 22.505878 11.838603 22.962891 11.980469 C 22.857301 12.44671 22.720377 12.932067 22.568359 13.423828 C 22.404687 13.115677 22.240237 12.80785 22.0625 12.5 C 21.884763 12.192151 21.700655 11.895429 21.515625 11.599609 z M 7.1542969 12.703125 C 7.409859 13.768497 7.7627696 14.873405 8.2207031 16 C 7.7627696 17.126595 7.409859 18.231503 7.1542969 19.296875 C 6.1028081 18.802492 5.282404 18.230459 4.7597656 17.660156 C 4.2245315 17.076109 4 16.535689 4 16 C 4 15.464311 4.2245315 14.923891 4.7597656 14.339844 C 5.282404 13.769541 6.1028081 13.197508 7.1542969 12.703125 z M 24.845703 12.703125 C 25.897191 13.197508 26.717596 13.769541 27.240234 14.339844 C 27.775468 14.923891 28 15.464311 28 16 C 28 16.535689 27.775468 17.076109 27.240234 17.660156 C 26.717596 18.230459 25.897191 18.802492 24.845703 19.296875 C 24.590141 18.231503 24.23723 17.126595 23.779297 16 C 24.23723 14.873405 24.590141 13.768497 24.845703 12.703125 z M 16 13 C 14.35499 13 13 14.35499 13 16 C 13 17.64501 14.35499 19 16 19 C 17.64501 19 19 17.64501 19 16 C 19 14.35499 17.64501 13 16 13 z M 16 15 C 16.564129 15 17 15.435871 17 16 C 17 16.564129 16.564129 17 16 17 C 15.435871 17 15 16.564129 15 16 C 15 15.435871 15.435871 15 16 15 z M 9.4316406 18.576172 C 9.5953134 18.884323 9.7597627 19.19215 9.9375 19.5 C 10.115237 19.807849 10.299345 20.104571 10.484375 20.400391 C 9.981943 20.28603 9.4941217 20.161397 9.0371094 20.019531 C 9.1426994 19.55329 9.2796229 19.067933 9.4316406 18.576172 z M 22.568359 18.576172 C 22.720377 19.067933 22.857301 19.55329 22.962891 20.019531 C 22.505878 20.161397 22.018057 20.28603 21.515625 20.400391 C 21.700655 20.104571 21.884763 19.807849 22.0625 19.5 C 22.240237 19.19215 22.404687 18.884323 22.568359 18.576172 z M 8.7226562 22.011719 C 9.7722189 22.322814 10.905846 22.569634 12.109375 22.736328 C 12.856199 23.696446 13.638579 24.554423 14.433594 25.308594 C 13.479049 25.97273 12.574044 26.396882 11.818359 26.564453 C 11.044942 26.735955 10.46392 26.660422 10 26.392578 C 9.5360797 26.124733 9.1795888 25.659846 8.9414062 24.904297 C 8.708758 24.166302 8.6249172 23.169979 8.7226562 22.011719 z M 23.277344 22.011719 C 23.375082 23.169979 23.29124 24.166302 23.058594 24.904297 C 22.820412 25.659847 22.46392 26.124733 22 26.392578 C 21.53608 26.660422 20.955057 26.735956 20.181641 26.564453 C 19.425956 26.396882 18.520951 25.97273 17.566406 25.308594 C 18.361421 24.554423 19.143801 23.696446 19.890625 22.736328 C 21.094154 22.569634 22.227781 22.322814 23.277344 22.011719 z M 14.947266 22.976562 C 15.295985 22.988894 15.644508 23 16 23 C 16.355492 23 16.704015 22.988894 17.052734 22.976562 C 16.702356 23.354663 16.351492 23.716039 16 24.041016 C 15.648508 23.716039 15.297644 23.354663 14.947266 22.976562 z"/>
    </svg>
      `;
  }

  tsSvg() {
    return `
      <svg width="15px" height="15px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.5 8V7.83333C12.5 7.09695 11.903 6.5 11.1667 6.5H10C9.17157 6.5 8.5 7.17157 8.5 8C8.5 8.82843 9.17157 9.5 10 9.5H11C11.8284 9.5 12.5 10.1716 12.5 11C12.5 11.8284 11.8284 12.5 11 12.5H10C9.17157 12.5 8.5 11.8284 8.5 11M8 6.5H3M5.5 6.5V13M0.5 0.5H14.5V14.5H0.5V0.5Z" stroke="black"/>
      </svg>
    `;
  }

  htmlSvg() {
    return `
      <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.1 3.5l.7 1.1.7-1.1v1.5h1v-3h-1l-.7 1.1-.6-1.1h-1.1v3h1zM18.4 5v-1h-1.4v-2h-1v3zM9.8 5h1v-2h.9v-1h-2.8v1h.9zM6.6 4h.9v1h1v-3h-1v1h-.9v-1h-1v3h1zM5 6l1.2 14.4 5.8 1.6 5.8-1.6 1.2-14.4h-14zm11.3 4.6h-6.8l.2 1.8h6.3999999999999995l-.5 5.5-3.6 1-3.6-1-.3-2.9h1.8l.1 1.5 2 .5 2-.5.2-2.3h-6.2l-.5-5.3h9l-.2 1.7z"/>
      </svg>
    `;
  }

  githubSvg() {
    return `
      <svg class="contact__svg" width="32px" height="32px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"/>
      </svg>
    `;
  }

  cssSvg() {
    return `
      <svg width="24px" height="24px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"/>
      </svg>
    `;
  }

  sassSvg() {
    return `
      <svg width="32px" height="32px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 0c8.839 0 16 7.161 16 16s-7.161 16-16 16c-8.839 0-16-7.161-16-16s7.161-16 16-16zM12.817 21.328c0.235 0.865 0.209 1.667-0.031 2.391l-0.084 0.24c-0.031 0.083-0.072 0.161-0.104 0.235-0.187 0.391-0.437 0.749-0.739 1.083-0.933 1.011-2.229 1.396-2.787 1.073-0.604-0.349-0.303-1.781 0.776-2.923 1.161-1.224 2.828-2.011 2.828-2.011v-0.004zM26.036 6.849c-0.724-2.844-5.437-3.776-9.896-2.193-2.656 0.943-5.525 2.423-7.593 4.355-2.459 2.296-2.849 4.296-2.687 5.129 0.572 2.948 4.609 4.881 6.271 6.308v0.011c-0.491 0.239-4.073 2.036-4.912 3.901-0.901 1.957 0.141 3.359 0.817 3.536 2.1 0.583 4.261-0.48 5.423-2.199 1.12-1.681 1.020-3.837 0.536-4.9 0.661-0.177 1.443-0.261 2.443-0.141 2.803 0.323 3.36 2.084 3.24 2.803s-0.699 1.14-0.901 1.26c-0.197 0.12-0.26 0.156-0.24 0.24 0.021 0.12 0.12 0.12 0.281 0.099 0.219-0.036 1.459-0.599 1.521-1.959 0.057-1.724-1.584-3.64-4.5-3.604-1.203 0.027-1.964 0.125-2.5 0.344-0.041-0.057-0.084-0.099-0.141-0.141-1.801-1.937-5.14-3.296-5-5.88 0.043-0.937 0.381-3.416 6.401-6.416 4.937-2.464 8.88-1.781 9.557-0.281 0.98 2.14-2.099 6.12-7.239 6.697-1.959 0.219-2.98-0.536-3.24-0.817-0.281-0.303-0.317-0.323-0.423-0.26-0.156 0.077-0.057 0.339 0 0.5 0.161 0.4 0.781 1.099 1.865 1.457 0.937 0.303 3.24 0.48 6-0.599 3.099-1.197 5.516-4.536 4.817-7.339z"/>
      </svg>
    `;
  }

  figmaSvg() {
    return `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M5 5.5A3.5 3.5 0 018.5 2H12v7H8.5A3.5 3.5 0 015 5.5z" />
      <path d="M12 2h3.5a3.5 3.5 0 110 7H12V2z" />
      <path d="M12 12.5a3.5 3.5 0 117 0 3.5 3.5 0 11-7 0z" />
      <path d="M5 19.5A3.5 3.5 0 018.5 16H12v3.5a3.5 3.5 0 11-7 0z" />
      <path d="M5 12.5A3.5 3.5 0 018.5 9H12v7H8.5A3.5 3.5 0 015 12.5z" />
    </svg>
    `;
  }

  webpackSvg() {
    return `
      <svg width="15px" height="15px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.5 10.5V4.5M1.5 10.5L7.5 14M1.5 10.5L5 9M1.5 4.5L7.5 1M1.5 4.5L7.5 7.5M7.5 1L13.5 4.5M7.5 1V4.5M13.5 4.5V10.5M13.5 4.5L7.5 7.5M13.5 10.5L7.5 14M13.5 10.5L10 9M7.5 14V7.5M7.5 4.5L5 6V9M7.5 4.5L10 6V9M5 9L7.5 10.5L10 9" stroke="black"/>
      </svg>
    `;
  }

  reduxSvg() {
    return `
      <svg width="25px" height="25px" viewBox="0 -0.5 25 25" xmlns="http://www.w3.org/2000/svg">
          <path d="m17.54 16.745c.893-.089 1.585-.837 1.585-1.746 0-.036-.001-.072-.003-.108v.005c-.047-.963-.834-1.726-1.801-1.736h-.065c-.968.036-1.739.829-1.739 1.802 0 .022 0 .044.001.067v-.003c.026.473.22.897.522 1.217l-.001-.001c-1.187 2.214-3.001 3.96-5.204 5.031l-.069.03c-1.192.66-2.614 1.048-4.127 1.048-.383 0-.761-.025-1.13-.073l.044.005c-1.361-.131-2.533-.844-3.277-1.884l-.009-.014c-.537-.755-.858-1.695-.858-2.711 0-.837.218-1.623.601-2.305l-.012.024c.547-1.036 1.293-1.898 2.194-2.562l.021-.014c-.171-.453-.324-.999-.432-1.56l-.011-.066c-4.683 3.349-4.208 7.93-2.786 10.095 1.243 1.586 3.159 2.596 5.311 2.596.098 0 .195-.002.292-.006h-.014c.035.001.077.001.119.001.647 0 1.276-.075 1.88-.216l-.056.011c4.008-.734 7.29-3.317 8.974-6.814l.032-.074z"/><path d="m23.18 12.799c-2.403-2.74-5.91-4.46-9.82-4.46-.119 0-.239.002-.357.005h.018-.538c-.283-.567-.86-.95-1.526-.95-.02 0-.039 0-.059.001h.003-.039c-.966.014-1.744.8-1.744 1.768 0 .029.001.057.002.085v-.004c.045.963.832 1.728 1.8 1.738h.079c.714-.028 1.317-.472 1.577-1.094l.004-.012h.585c2.554.003 4.924.787 6.884 2.128l-.042-.027c1.531.98 2.713 2.388 3.392 4.055l.021.058c.26.542.411 1.178.411 1.849 0 .71-.169 1.38-.47 1.972l.011-.025c-.777 1.586-2.379 2.658-4.231 2.658-.068 0-.135-.001-.202-.004h.01c-1.137-.024-2.21-.274-3.183-.707l.052.021c-.379.316-1.011.836-1.47 1.153 1.214.596 2.638.959 4.143.994h.012c.059.002.128.003.197.003 2.552 0 4.787-1.355 6.026-3.384l.018-.031c.342-.811.54-1.753.54-2.742 0-1.98-.796-3.774-2.085-5.079l.001.001-.015.032z"/><path d="m6.844 17.316c.044.964.833 1.731 1.803 1.738h.064c.968-.033 1.741-.827 1.741-1.8 0-.99-.799-1.794-1.788-1.801h-.067c-.01-.001-.022-.001-.033-.001-.073 0-.143.011-.209.033l.005-.001c-1.07-1.741-1.703-3.85-1.703-6.107 0-.364.016-.724.049-1.079l-.003.046c.091-1.906.791-3.633 1.907-5.007l-.012.016c.991-1.071 2.387-1.753 3.944-1.803h.009c3.412-.064 4.835 4.188 4.945 5.878l1.582.473c-.368-5.181-3.59-7.901-6.671-7.901-3.132.163-5.731 2.27-6.622 5.131l-.014.052c-.438 1.262-.692 2.716-.692 4.229 0 2.588.741 5.003 2.021 7.044l-.032-.055c-.143.216-.228.481-.228.766 0 .053.003.105.009.156l-.001-.006z"/>
      </svg>
    `;
  }

  nodejsSvg() {
    return `
      <svg width="32px" height="32px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.304 16.563c0-0.095-0.050-0.183-0.132-0.23l-2.192-1.261c-0.037-0.022-0.079-0.033-0.121-0.035-0.004 0-0.020 0-0.023 0-0.042 0.002-0.083 0.013-0.121 0.035l-2.191 1.261c-0.082 0.047-0.133 0.135-0.133 0.23l0.005 3.396c0 0.047 0.025 0.091 0.066 0.114 0.041 0.024 0.091 0.024 0.132 0l1.302-0.746c0.082-0.049 0.132-0.135 0.132-0.23v-1.587c0-0.094 0.050-0.182 0.132-0.229l0.555-0.319c0.041-0.024 0.086-0.035 0.133-0.035 0.045 0 0.091 0.012 0.132 0.035l0.554 0.319c0.082 0.047 0.132 0.135 0.132 0.229v1.587c0 0.095 0.051 0.181 0.133 0.23l1.302 0.746c0.041 0.024 0.092 0.024 0.132 0 0.040-0.023 0.066-0.067 0.066-0.114l0.004-3.396zM17.006 11.894c-0.041-0.023-0.091-0.022-0.131 0.002s-0.065 0.067-0.065 0.114v3.363c0 0.033-0.018 0.064-0.046 0.080s-0.064 0.017-0.093 0l-0.549-0.316c-0.082-0.047-0.183-0.047-0.265 0l-2.192 1.265c-0.082 0.047-0.133 0.135-0.133 0.229v2.531c0 0.095 0.050 0.182 0.132 0.229l2.192 1.266c0.082 0.047 0.183 0.047 0.265 0l2.193-1.266c0.082-0.048 0.132-0.135 0.132-0.229v-6.309c0-0.096-0.052-0.184-0.136-0.231l-1.305-0.728zM16.803 18.331c0 0.024-0.012 0.046-0.033 0.057l-0.753 0.434c-0.020 0.012-0.046 0.012-0.066 0l-0.753-0.434c-0.021-0.012-0.033-0.034-0.033-0.057v-0.869c0-0.024 0.013-0.046 0.033-0.057l0.753-0.435c0.020-0.012 0.046-0.012 0.066 0l0.753 0.435c0.020 0.012 0.033 0.034 0.033 0.057v0.869zM24.85 17.439c0.081-0.047 0.132-0.134 0.132-0.229v-0.613c0-0.095-0.050-0.181-0.132-0.229l-2.178-1.265c-0.082-0.048-0.183-0.048-0.265-0l-2.192 1.265c-0.082 0.047-0.132 0.135-0.132 0.229v2.53c0 0.095 0.051 0.183 0.134 0.23l2.178 1.241c0.080 0.046 0.179 0.046 0.26 0.001l1.317-0.732c0.041-0.023 0.067-0.067 0.068-0.115s-0.025-0.092-0.066-0.116l-2.206-1.266c-0.041-0.023-0.066-0.067-0.066-0.115v-0.793c0-0.047 0.025-0.091 0.066-0.115l0.687-0.395c0.041-0.023 0.091-0.023 0.132 0l0.687 0.395c0.041 0.024 0.066 0.067 0.066 0.115v0.624c0 0.047 0.025 0.091 0.066 0.115s0.092 0.023 0.133-0l1.312-0.763zM9.291 15.090c0.082-0.047 0.183-0.047 0.265 0l2.192 1.265c0.082 0.047 0.132 0.134 0.132 0.229v2.532c0 0.095-0.051 0.182-0.132 0.229l-2.192 1.266c-0.082 0.047-0.183 0.047-0.265 0l-2.192-1.266c-0.082-0.047-0.132-0.135-0.132-0.229v-2.532c0-0.095 0.050-0.182 0.132-0.229l2.192-1.265zM29.106 20.647c-0.075 0-0.151-0.020-0.217-0.058l-0.69-0.408c-0.103-0.058-0.052-0.078-0.019-0.090 0.137-0.048 0.165-0.059 0.312-0.142 0.015-0.009 0.036-0.005 0.052 0.004l0.53 0.315c0.019 0.011 0.046 0.011 0.064 0l2.067-1.193c0.019-0.011 0.031-0.033 0.031-0.056v-2.386c0-0.023-0.012-0.045-0.032-0.057l-2.066-1.192c-0.019-0.011-0.045-0.011-0.064 0l-2.066 1.192c-0.020 0.011-0.033 0.034-0.033 0.057v2.386c0 0.023 0.013 0.044 0.032 0.055l0.566 0.327c0.307 0.154 0.495-0.027 0.495-0.209v-2.355c0-0.033 0.027-0.059 0.060-0.059h0.262c0.033 0 0.060 0.026 0.060 0.059v2.355c0 0.41-0.223 0.645-0.612 0.645-0.119 0-0.214 0-0.476-0.129l-0.542-0.312c-0.134-0.077-0.217-0.222-0.217-0.377v-2.386c0-0.155 0.083-0.3 0.217-0.377l2.067-1.194c0.131-0.074 0.305-0.074 0.434 0l2.067 1.194c0.134 0.077 0.217 0.222 0.217 0.377v2.386c0 0.155-0.083 0.299-0.217 0.377l-2.067 1.193c-0.066 0.038-0.141 0.058-0.218 0.058zM29.745 19.004c-0.905 0-1.094-0.415-1.094-0.764 0-0.033 0.026-0.059 0.060-0.059h0.267c0.030 0 0.055 0.022 0.059 0.051 0.040 0.272 0.16 0.41 0.708 0.41 0.435 0 0.621-0.099 0.621-0.329 0-0.133-0.052-0.232-0.729-0.298-0.565-0.056-0.915-0.181-0.915-0.633 0-0.417 0.352-0.666 0.941-0.666 0.662 0 0.99 0.23 1.031 0.723 0.002 0.017-0.004 0.033-0.016 0.046s-0.027 0.019-0.044 0.019h-0.268c-0.028 0-0.052-0.020-0.058-0.047-0.064-0.286-0.221-0.378-0.645-0.378-0.475 0-0.531 0.166-0.531 0.29 0 0.151 0.065 0.194 0.707 0.279 0.635 0.084 0.937 0.203 0.937 0.649 0 0.45-0.375 0.708-1.030 0.708zM22.506 17.321c0.016-0.009 0.035-0.009 0.051 0l0.421 0.243c0.016 0.009 0.026 0.026 0.026 0.044v0.486c0 0.018-0.010 0.035-0.026 0.044l-0.421 0.243c-0.016 0.009-0.035 0.009-0.051 0l-0.42-0.243c-0.016-0.009-0.025-0.026-0.025-0.044v-0.486c0-0.018 0.010-0.035 0.025-0.044l0.42-0.243z"></path>
      </svg>
    `;
  }
}

export const skillSvg = new SkillSvg();