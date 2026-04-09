import{$n as e,Di as t,In as n,Ji as r,Li as i,Tr as a,Un as o,Yn as s,Z as c,_i as l,_r as u,at as d,gr as f,mr as p,sr as m,st as h,ua as g,v as _,wi as v}from"./index-CDzHvUjE.js";import{t as y}from"./index-QzEx9nL--D6aE4AOv.js";var b=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},x=class extends y{constructor(){super(...arguments),this.onOtpSubmit=async e=>{var n;try{if(this.authConnector){let a=_.state.activeChain,s=i.getConnections(a),c=v.state.remoteFeatures?.multiWallet,l=s.length>0;if(await this.authConnector.provider.connectOtp({otp:e}),r.sendEvent({type:`track`,event:`EMAIL_VERIFICATION_CODE_PASS`}),a)await i.connectExternal(this.authConnector,a);else throw Error(`Active chain is not set on ChainController`);if((n=v.state.remoteFeatures)!=null&&n.emailCapture)return;if(v.state.siwx){t.close();return}if(l&&c){o.replace(`ProfileWallets`),f.showSuccess(`New Wallet Added`);return}t.close()}}catch(e){throw r.sendEvent({type:`track`,event:`EMAIL_VERIFICATION_CODE_FAIL`,properties:{message:a.parseError(e)}}),e}},this.onOtpResend=async e=>{this.authConnector&&(await this.authConnector.provider.connectEmail({email:e}),r.sendEvent({type:`track`,event:`EMAIL_VERIFICATION_CODE_SENT`}))}}};x=b([l(`w3m-email-verify-otp-view`)],x);var S=e`
  wui-icon-box {
    height: ${({spacing:e})=>e[16]};
    width: ${({spacing:e})=>e[16]};
  }
`,C=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},w=class extends p{constructor(){super(),this.email=o.state.data?.email,this.authConnector=n.getAuthConnector(),this.loading=!1,this.listenForDeviceApproval()}render(){if(!this.email)throw Error(`w3m-email-verify-device-view: No email provided`);if(!this.authConnector)throw Error(`w3m-email-verify-device-view: No auth connector provided`);return s`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${[`6`,`3`,`6`,`3`]}
        gap="4"
      >
        <wui-icon-box size="xl" color="accent-primary" icon="sealCheck"></wui-icon-box>

        <wui-flex flexDirection="column" alignItems="center" gap="3">
          <wui-flex flexDirection="column" alignItems="center">
            <wui-text variant="md-regular" color="primary">
              Approve the login link we sent to
            </wui-text>
            <wui-text variant="md-regular" color="primary"><b>${this.email}</b></wui-text>
          </wui-flex>

          <wui-text variant="sm-regular" color="secondary" align="center">
            The code expires in 20 minutes
          </wui-text>

          <wui-flex alignItems="center" id="w3m-resend-section" gap="2">
            <wui-text variant="sm-regular" color="primary" align="center">
              Didn't receive it?
            </wui-text>
            <wui-link @click=${this.onResendCode.bind(this)} .disabled=${this.loading}>
              Resend email
            </wui-link>
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}async listenForDeviceApproval(){if(this.authConnector)try{await this.authConnector.provider.connectDevice(),r.sendEvent({type:`track`,event:`DEVICE_REGISTERED_FOR_EMAIL`}),r.sendEvent({type:`track`,event:`EMAIL_VERIFICATION_CODE_SENT`}),o.replace(`EmailVerifyOtp`,{email:this.email})}catch{o.goBack()}}async onResendCode(){try{if(!this.loading){if(!this.authConnector||!this.email)throw Error(`w3m-email-login-widget: Unable to resend email`);this.loading=!0,await this.authConnector.provider.connectEmail({email:this.email}),this.listenForDeviceApproval(),f.showSuccess(`Code email resent`)}}catch(e){f.showError(e)}finally{this.loading=!1}}};w.styles=S,C([h()],w.prototype,`loading`,void 0),w=C([l(`w3m-email-verify-device-view`)],w);var T=c`
  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
  }
`,E=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},D=class extends p{constructor(){super(...arguments),this.formRef=m(),this.initialEmail=o.state.data?.email??``,this.redirectView=o.state.data?.redirectView,this.email=``,this.loading=!1}firstUpdated(){var e;(e=this.formRef.value)==null||e.addEventListener(`keydown`,e=>{e.key===`Enter`&&this.onSubmitEmail(e)})}render(){return s`
      <wui-flex flexDirection="column" padding="4" gap="4">
        <form ${u(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
          <wui-email-input
            value=${this.initialEmail}
            .disabled=${this.loading}
            @inputChange=${this.onEmailInputChange.bind(this)}
          >
          </wui-email-input>
          <input type="submit" hidden />
        </form>
        ${this.buttonsTemplate()}
      </wui-flex>
    `}onEmailInputChange(e){this.email=e.detail}async onSubmitEmail(e){try{if(this.loading)return;this.loading=!0,e.preventDefault();let t=n.getAuthConnector();if(!t)throw Error(`w3m-update-email-wallet: Auth connector not found`);let i=await t.provider.updateEmail({email:this.email});r.sendEvent({type:`track`,event:`EMAIL_EDIT`}),i.action===`VERIFY_SECONDARY_OTP`?o.push(`UpdateEmailSecondaryOtp`,{email:this.initialEmail,newEmail:this.email,redirectView:this.redirectView}):o.push(`UpdateEmailPrimaryOtp`,{email:this.initialEmail,newEmail:this.email,redirectView:this.redirectView})}catch(e){f.showError(e),this.loading=!1}}buttonsTemplate(){let e=!this.loading&&this.email.length>3&&this.email!==this.initialEmail;return this.redirectView?s`
      <wui-flex gap="3">
        <wui-button size="md" variant="neutral" fullWidth @click=${o.goBack}>
          Cancel
        </wui-button>

        <wui-button
          size="md"
          variant="accent-primary"
          fullWidth
          @click=${this.onSubmitEmail.bind(this)}
          .disabled=${!e}
          .loading=${this.loading}
        >
          Save
        </wui-button>
      </wui-flex>
    `:s`
        <wui-button
          size="md"
          variant="accent-primary"
          fullWidth
          @click=${this.onSubmitEmail.bind(this)}
          .disabled=${!e}
          .loading=${this.loading}
        >
          Save
        </wui-button>
      `}};D.styles=T,E([h()],D.prototype,`email`,void 0),E([h()],D.prototype,`loading`,void 0),D=E([l(`w3m-update-email-wallet-view`)],D);var O=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},k=class extends y{constructor(){super(),this.email=o.state.data?.email,this.onOtpSubmit=async e=>{try{this.authConnector&&(await this.authConnector.provider.updateEmailPrimaryOtp({otp:e}),r.sendEvent({type:`track`,event:`EMAIL_VERIFICATION_CODE_PASS`}),o.replace(`UpdateEmailSecondaryOtp`,o.state.data))}catch(e){throw r.sendEvent({type:`track`,event:`EMAIL_VERIFICATION_CODE_FAIL`,properties:{message:a.parseError(e)}}),e}},this.onStartOver=()=>{o.replace(`UpdateEmailWallet`,o.state.data)}}};k=O([l(`w3m-update-email-primary-otp-view`)],k);var A=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},j=class extends y{constructor(){super(),this.email=o.state.data?.newEmail,this.redirectView=o.state.data?.redirectView,this.onOtpSubmit=async e=>{try{this.authConnector&&(await this.authConnector.provider.updateEmailSecondaryOtp({otp:e}),r.sendEvent({type:`track`,event:`EMAIL_VERIFICATION_CODE_PASS`}),this.redirectView&&o.reset(this.redirectView))}catch(e){throw r.sendEvent({type:`track`,event:`EMAIL_VERIFICATION_CODE_FAIL`,properties:{message:a.parseError(e)}}),e}},this.onStartOver=()=>{o.replace(`UpdateEmailWallet`,o.state.data)}}};j=A([l(`w3m-update-email-secondary-otp-view`)],j);var M=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},N=class extends p{constructor(){super(),this.authConnector=n.getAuthConnector(),this.isEmailEnabled=v.state.remoteFeatures?.email,this.isAuthEnabled=this.checkIfAuthEnabled(n.state.connectors),this.connectors=n.state.connectors,n.subscribeKey(`connectors`,e=>{this.connectors=e,this.isAuthEnabled=this.checkIfAuthEnabled(this.connectors)})}render(){if(!this.isEmailEnabled)throw Error(`w3m-email-login-view: Email is not enabled`);if(!this.isAuthEnabled)throw Error(`w3m-email-login-view: No auth connector provided`);return s`<wui-flex flexDirection="column" .padding=${[`1`,`3`,`3`,`3`]} gap="4">
      <w3m-email-login-widget></w3m-email-login-widget>
    </wui-flex> `}checkIfAuthEnabled(e){let t=e.filter(e=>e.type===d.CONNECTOR_TYPE_AUTH).map(e=>e.chain);return g.AUTH_CONNECTOR_SUPPORTED_CHAINS.some(e=>t.includes(e))}};M([h()],N.prototype,`connectors`,void 0),N=M([l(`w3m-email-login-view`)],N);export{N as W3mEmailLoginView,y as W3mEmailOtpWidget,w as W3mEmailVerifyDeviceView,x as W3mEmailVerifyOtpView,k as W3mUpdateEmailPrimaryOtpView,j as W3mUpdateEmailSecondaryOtpView,D as W3mUpdateEmailWalletView};