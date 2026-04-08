import{$ as e,Bn as t,Gt as n,In as r,K as i,Kn as a,Q as o,Zn as s,_r as c,an as l,at as u,g as d,hr as f,mi as p,ut as m}from"./index-EPIf-JGa.js";var h=u`
  :host {
    position: relative;
    display: inline-block;
  }

  input {
    width: 48px;
    height: 48px;
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[4]};
    border: 1px solid ${({tokens:e})=>e.theme.borderPrimary};
    font-family: ${({fontFamily:e})=>e.regular};
    font-size: ${({textSize:e})=>e.large};
    line-height: 18px;
    letter-spacing: -0.16px;
    text-align: center;
    color: ${({tokens:e})=>e.theme.textPrimary};
    caret-color: ${({tokens:e})=>e.core.textAccentPrimary};
    transition:
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e[`ease-out-power-2`]},
      border-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e[`ease-out-power-2`]},
      box-shadow ${({durations:e})=>e.lg}
        ${({easings:e})=>e[`ease-out-power-2`]};
    will-change: background-color, border-color, box-shadow;
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: ${({spacing:e})=>e[4]};
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  input:focus-visible:enabled {
    background-color: transparent;
    border: 1px solid ${({tokens:e})=>e.theme.borderSecondary};
    box-shadow: 0px 0px 0px 4px ${({tokens:e})=>e.core.foregroundAccent040};
  }
`,g=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},_=class extends f{constructor(){super(...arguments),this.disabled=!1,this.value=``}render(){return l`<input
      type="number"
      maxlength="1"
      inputmode="numeric"
      autofocus
      ?disabled=${this.disabled}
      value=${this.value}
    /> `}};_.styles=[i,d,h],g([n({type:Boolean})],_.prototype,`disabled`,void 0),g([n({type:String})],_.prototype,`value`,void 0),_=g([p(`wui-input-numeric`)],_);var v=e`
  :host {
    position: relative;
    display: block;
  }
`,y=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},b=class extends f{constructor(){super(...arguments),this.length=6,this.otp=``,this.values=Array.from({length:this.length}).map(()=>``),this.numerics=[],this.shouldInputBeEnabled=e=>this.values.slice(0,e).every(e=>e!==``),this.handleKeyDown=(e,t)=>{let n=e.target,r=this.getInputElement(n),i=[`ArrowLeft`,`ArrowRight`,`Shift`,`Delete`];if(!r)return;i.includes(e.key)&&e.preventDefault();let a=r.selectionStart;switch(e.key){case`ArrowLeft`:a&&r.setSelectionRange(a+1,a+1),this.focusInputField(`prev`,t);break;case`ArrowRight`:this.focusInputField(`next`,t);break;case`Shift`:this.focusInputField(`next`,t);break;case`Delete`:r.value===``?this.focusInputField(`prev`,t):this.updateInput(r,t,``);break;case`Backspace`:r.value===``?this.focusInputField(`prev`,t):this.updateInput(r,t,``);break}},this.focusInputField=(e,t)=>{if(e===`next`){let e=t+1;if(!this.shouldInputBeEnabled(e))return;let n=this.numerics[e<this.length?e:t],r=n?this.getInputElement(n):void 0;r&&(r.disabled=!1,r.focus())}if(e===`prev`){let e=t-1,n=this.numerics[e>-1?e:t],r=n?this.getInputElement(n):void 0;r&&r.focus()}}}firstUpdated(){var e;this.otp&&(this.values=this.otp.split(``));let t=this.shadowRoot?.querySelectorAll(`wui-input-numeric`);t&&(this.numerics=Array.from(t)),(e=this.numerics[0])==null||e.focus()}render(){return l`
      <wui-flex gap="1" data-testid="wui-otp-input">
        ${Array.from({length:this.length}).map((e,t)=>l`
            <wui-input-numeric
              @input=${e=>this.handleInput(e,t)}
              @click=${e=>this.selectInput(e)}
              @keydown=${e=>this.handleKeyDown(e,t)}
              .disabled=${!this.shouldInputBeEnabled(t)}
              .value=${this.values[t]||``}
            >
            </wui-input-numeric>
          `)}
      </wui-flex>
    `}updateInput(e,t,n){let r=this.numerics[t],i=e||(r?this.getInputElement(r):void 0);i&&(i.value=n,this.values=this.values.map((e,r)=>r===t?n:e))}selectInput(e){let t=e.target;t&&this.getInputElement(t)?.select()}handleInput(e,t){let n=e.target,r=this.getInputElement(n);if(r){let n=r.value;e.inputType===`insertFromPaste`?this.handlePaste(r,n,t):s.isNumber(n)&&e.data?(this.updateInput(r,t,e.data),this.focusInputField(`next`,t)):this.updateInput(r,t,``)}this.dispatchInputChangeEvent()}handlePaste(e,t,n){let r=t[0];if(r&&s.isNumber(r)){this.updateInput(e,n,r);let i=t.substring(1);if(n+1<this.length&&i.length){let e=this.numerics[n+1],t=e?this.getInputElement(e):void 0;t&&this.handlePaste(t,i,n+1)}else this.focusInputField(`next`,n)}else this.updateInput(e,n,``)}getInputElement(e){var t;return(t=e.shadowRoot)!=null&&t.querySelector(`input`)?e.shadowRoot.querySelector(`input`):null}dispatchInputChangeEvent(){let e=this.values.join(``);this.dispatchEvent(new CustomEvent(`inputChange`,{detail:e,bubbles:!0,composed:!0}))}};b.styles=[i,v],y([n({type:Number})],b.prototype,`length`,void 0),y([n({type:String})],b.prototype,`otp`,void 0),y([m()],b.prototype,`values`,void 0),b=y([p(`wui-otp`)],b);var x=e`
  wui-loading-spinner {
    margin: 9px auto;
  }

  .email-display,
  .email-display wui-text {
    max-width: 100%;
  }
`,S=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},C,w=C=class extends f{firstUpdated(){this.startOTPTimeout()}disconnectedCallback(){clearTimeout(this.OTPTimeout)}constructor(){super(),this.loading=!1,this.timeoutTimeLeft=o.getTimeToNextEmailLogin(),this.error=``,this.otp=``,this.email=a.state.data?.email,this.authConnector=t.getAuthConnector()}render(){if(!this.email)throw Error(`w3m-email-otp-widget: No email provided`);let e=!!this.timeoutTimeLeft,t=this.getFooterLabels(e);return l`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${[`4`,`0`,`4`,`0`]}
        gap="4"
      >
        <wui-flex
          class="email-display"
          flexDirection="column"
          alignItems="center"
          .padding=${[`0`,`5`,`0`,`5`]}
        >
          <wui-text variant="md-regular" color="primary" align="center">
            Enter the code we sent to
          </wui-text>
          <wui-text variant="md-medium" color="primary" lineClamp="1" align="center">
            ${this.email}
          </wui-text>
        </wui-flex>

        <wui-text variant="sm-regular" color="secondary">The code expires in 20 minutes</wui-text>

        ${this.loading?l`<wui-loading-spinner size="xl" color="accent-primary"></wui-loading-spinner>`:l` <wui-flex flexDirection="column" alignItems="center" gap="2">
              <wui-otp
                dissabled
                length="6"
                @inputChange=${this.onOtpInputChange.bind(this)}
                .otp=${this.otp}
              ></wui-otp>
              ${this.error?l`
                    <wui-text variant="sm-regular" align="center" color="error">
                      ${this.error}. Try Again
                    </wui-text>
                  `:null}
            </wui-flex>`}

        <wui-flex alignItems="center" gap="2">
          <wui-text variant="sm-regular" color="secondary">${t.title}</wui-text>
          <wui-link @click=${this.onResendCode.bind(this)} .disabled=${e}>
            ${t.action}
          </wui-link>
        </wui-flex>
      </wui-flex>
    `}startOTPTimeout(){this.timeoutTimeLeft=o.getTimeToNextEmailLogin(),this.OTPTimeout=setInterval(()=>{this.timeoutTimeLeft>0?this.timeoutTimeLeft=o.getTimeToNextEmailLogin():clearInterval(this.OTPTimeout)},1e3)}async onOtpInputChange(e){try{this.loading||(this.otp=e.detail,this.shouldSubmitOnOtpChange()&&(this.loading=!0,await this.onOtpSubmit?.call(this,this.otp)))}catch(e){this.error=r.parseError(e),this.loading=!1}}async onResendCode(){try{if(this.onOtpResend){if(!this.loading&&!this.timeoutTimeLeft){if(this.error=``,this.otp=``,!t.getAuthConnector()||!this.email)throw Error(`w3m-email-otp-widget: Unable to resend email`);this.loading=!0,await this.onOtpResend(this.email),this.startOTPTimeout(),c.showSuccess(`Code email resent`)}}else this.onStartOver&&this.onStartOver()}catch(e){c.showError(e)}finally{this.loading=!1}}getFooterLabels(e){return this.onStartOver?{title:`Something wrong?`,action:`Try again ${e?`in ${this.timeoutTimeLeft}s`:``}`}:{title:`Didn't receive it?`,action:`Resend ${e?`in ${this.timeoutTimeLeft}s`:`Code`}`}}shouldSubmitOnOtpChange(){return this.authConnector&&this.otp.length===C.OTP_LENGTH}};w.OTP_LENGTH=6,w.styles=x,S([m()],w.prototype,`loading`,void 0),S([m()],w.prototype,`timeoutTimeLeft`,void 0),S([m()],w.prototype,`error`,void 0),w=C=S([p(`w3m-email-otp-widget`)],w);export{w as t};