import{Dc as e,Hs as t,Il as n,Ms as r,Oa as i,Oc as a,Ou as o,Ps as s,Qs as c,Rs as l,Tc as u,ac as d,bu as f,fc as p,fo as m,gc as h,ho as g,jl as _,qs as v}from"./index-BphFrnNk.js";import{t as y}from"./index-kGiTtkDP-ykxuwSdn.js";var b=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},x=class extends y{constructor(){super(...arguments),this.onOtpSubmit=async n=>{var a;try{if(this.authConnector){let t=i.state.activeChain,o=_.getConnections(t),l=r.state.remoteFeatures?.multiWallet,u=o.length>0;if(await this.authConnector.provider.connectOtp({otp:n}),f.sendEvent({type:`track`,event:`EMAIL_VERIFICATION_CODE_PASS`}),t)await _.connectExternal(this.authConnector,t);else throw Error(`Active chain is not set on ChainController`);if((a=r.state.remoteFeatures)!=null&&a.emailCapture)return;if(r.state.siwx){s.close();return}if(u&&l){c.replace(`ProfileWallets`),e.showSuccess(`New Wallet Added`);return}s.close()}}catch(e){throw f.sendEvent({type:`track`,event:`EMAIL_VERIFICATION_CODE_FAIL`,properties:{message:t.parseError(e)}}),e}},this.onOtpResend=async e=>{this.authConnector&&(await this.authConnector.provider.connectEmail({email:e}),f.sendEvent({type:`track`,event:`EMAIL_VERIFICATION_CODE_SENT`}))}}};x=b([n(`w3m-email-verify-otp-view`)],x);var S=m`
  wui-icon-box {
    height: ${({spacing:e})=>e[16]};
    width: ${({spacing:e})=>e[16]};
  }
`,C=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},w=class extends u{constructor(){super(),this.email=c.state.data?.email,this.authConnector=v.getAuthConnector(),this.loading=!1,this.listenForDeviceApproval()}render(){if(!this.email)throw Error(`w3m-email-verify-device-view: No email provided`);if(!this.authConnector)throw Error(`w3m-email-verify-device-view: No auth connector provided`);return d`
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
    `}async listenForDeviceApproval(){if(this.authConnector)try{await this.authConnector.provider.connectDevice(),f.sendEvent({type:`track`,event:`DEVICE_REGISTERED_FOR_EMAIL`}),f.sendEvent({type:`track`,event:`EMAIL_VERIFICATION_CODE_SENT`}),c.replace(`EmailVerifyOtp`,{email:this.email})}catch{c.goBack()}}async onResendCode(){try{if(!this.loading){if(!this.authConnector||!this.email)throw Error(`w3m-email-login-widget: Unable to resend email`);this.loading=!0,await this.authConnector.provider.connectEmail({email:this.email}),this.listenForDeviceApproval(),e.showSuccess(`Code email resent`)}}catch(t){e.showError(t)}finally{this.loading=!1}}};w.styles=S,C([g()],w.prototype,`loading`,void 0),w=C([n(`w3m-email-verify-device-view`)],w);var T=o`
  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
  }
`,E=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},D=class extends u{constructor(){super(...arguments),this.formRef=h(),this.initialEmail=c.state.data?.email??``,this.redirectView=c.state.data?.redirectView,this.email=``,this.loading=!1}firstUpdated(){var e;(e=this.formRef.value)==null||e.addEventListener(`keydown`,e=>{e.key===`Enter`&&this.onSubmitEmail(e)})}render(){return d`
      <wui-flex flexDirection="column" padding="4" gap="4">
        <form ${a(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
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
    `}onEmailInputChange(e){this.email=e.detail}async onSubmitEmail(t){try{if(this.loading)return;this.loading=!0,t.preventDefault();let e=v.getAuthConnector();if(!e)throw Error(`w3m-update-email-wallet: Auth connector not found`);let n=await e.provider.updateEmail({email:this.email});f.sendEvent({type:`track`,event:`EMAIL_EDIT`}),n.action===`VERIFY_SECONDARY_OTP`?c.push(`UpdateEmailSecondaryOtp`,{email:this.initialEmail,newEmail:this.email,redirectView:this.redirectView}):c.push(`UpdateEmailPrimaryOtp`,{email:this.initialEmail,newEmail:this.email,redirectView:this.redirectView})}catch(t){e.showError(t),this.loading=!1}}buttonsTemplate(){let e=!this.loading&&this.email.length>3&&this.email!==this.initialEmail;return this.redirectView?d`
      <wui-flex gap="3">
        <wui-button size="md" variant="neutral" fullWidth @click=${c.goBack}>
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
    `:d`
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
      `}};D.styles=T,E([g()],D.prototype,`email`,void 0),E([g()],D.prototype,`loading`,void 0),D=E([n(`w3m-update-email-wallet-view`)],D);var O=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},k=class extends y{constructor(){super(),this.email=c.state.data?.email,this.onOtpSubmit=async e=>{try{this.authConnector&&(await this.authConnector.provider.updateEmailPrimaryOtp({otp:e}),f.sendEvent({type:`track`,event:`EMAIL_VERIFICATION_CODE_PASS`}),c.replace(`UpdateEmailSecondaryOtp`,c.state.data))}catch(e){throw f.sendEvent({type:`track`,event:`EMAIL_VERIFICATION_CODE_FAIL`,properties:{message:t.parseError(e)}}),e}},this.onStartOver=()=>{c.replace(`UpdateEmailWallet`,c.state.data)}}};k=O([n(`w3m-update-email-primary-otp-view`)],k);var A=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},j=class extends y{constructor(){super(),this.email=c.state.data?.newEmail,this.redirectView=c.state.data?.redirectView,this.onOtpSubmit=async e=>{try{this.authConnector&&(await this.authConnector.provider.updateEmailSecondaryOtp({otp:e}),f.sendEvent({type:`track`,event:`EMAIL_VERIFICATION_CODE_PASS`}),this.redirectView&&c.reset(this.redirectView))}catch(e){throw f.sendEvent({type:`track`,event:`EMAIL_VERIFICATION_CODE_FAIL`,properties:{message:t.parseError(e)}}),e}},this.onStartOver=()=>{c.replace(`UpdateEmailWallet`,c.state.data)}}};j=A([n(`w3m-update-email-secondary-otp-view`)],j);var M=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},N=class extends u{constructor(){super(),this.authConnector=v.getAuthConnector(),this.isEmailEnabled=r.state.remoteFeatures?.email,this.isAuthEnabled=this.checkIfAuthEnabled(v.state.connectors),this.connectors=v.state.connectors,v.subscribeKey(`connectors`,e=>{this.connectors=e,this.isAuthEnabled=this.checkIfAuthEnabled(this.connectors)})}render(){if(!this.isEmailEnabled)throw Error(`w3m-email-login-view: Email is not enabled`);if(!this.isAuthEnabled)throw Error(`w3m-email-login-view: No auth connector provided`);return d`<wui-flex flexDirection="column" .padding=${[`1`,`3`,`3`,`3`]} gap="4">
      <w3m-email-login-widget></w3m-email-login-widget>
    </wui-flex> `}checkIfAuthEnabled(e){let t=e.filter(e=>e.type===p.CONNECTOR_TYPE_AUTH).map(e=>e.chain);return l.AUTH_CONNECTOR_SUPPORTED_CHAINS.some(e=>t.includes(e))}};M([g()],N.prototype,`connectors`,void 0),N=M([n(`w3m-email-login-view`)],N);export{N as W3mEmailLoginView,y as W3mEmailOtpWidget,w as W3mEmailVerifyDeviceView,x as W3mEmailVerifyOtpView,k as W3mUpdateEmailPrimaryOtpView,j as W3mUpdateEmailSecondaryOtpView,D as W3mUpdateEmailWalletView};