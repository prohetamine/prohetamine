import{$r as e,An as t,Bn as n,En as r,Fn as i,Hi as a,Hr as o,Kn as s,Rt as c,Si as l,Tn as ee,Un as te,Ut as ne,_i as u,_t as re,ai as d,cr as ie,dr as f,et as p,gi as ae,ki as m,m as h,ma as oe,mi as se,oa as g,oi as ce,or as _,pr as v,qn as y,rt as b,sn as le,t as ue,ti as x,wn as de,xn as S,yn as C}from"./index-BXc5LAL-.js";var fe=p`
  :host {
    position: relative;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    padding: ${({spacing:e})=>e[1]};
  }

  /* -- Colors --------------------------------------------------- */
  button[data-type='accent'] wui-icon {
    color: ${({tokens:e})=>e.core.iconAccentPrimary};
  }

  button[data-type='neutral'][data-variant='primary'] wui-icon {
    color: ${({tokens:e})=>e.theme.iconInverse};
  }

  button[data-type='neutral'][data-variant='secondary'] wui-icon {
    color: ${({tokens:e})=>e.theme.iconDefault};
  }

  button[data-type='success'] wui-icon {
    color: ${({tokens:e})=>e.core.iconSuccess};
  }

  button[data-type='error'] wui-icon {
    color: ${({tokens:e})=>e.core.iconError};
  }

  /* -- Sizes --------------------------------------------------- */
  button[data-size='xs'] {
    width: 16px;
    height: 16px;

    border-radius: ${({borderRadius:e})=>e[1]};
  }

  button[data-size='sm'] {
    width: 20px;
    height: 20px;
    border-radius: ${({borderRadius:e})=>e[1]};
  }

  button[data-size='md'] {
    width: 24px;
    height: 24px;
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  button[data-size='lg'] {
    width: 28px;
    height: 28px;
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  button[data-size='xs'] wui-icon {
    width: 8px;
    height: 8px;
  }

  button[data-size='sm'] wui-icon {
    width: 12px;
    height: 12px;
  }

  button[data-size='md'] wui-icon {
    width: 16px;
    height: 16px;
  }

  button[data-size='lg'] wui-icon {
    width: 20px;
    height: 20px;
  }

  /* -- Hover --------------------------------------------------- */
  @media (hover: hover) {
    button[data-type='accent']:hover:enabled {
      background-color: ${({tokens:e})=>e.core.foregroundAccent010};
    }

    button[data-variant='primary'][data-type='neutral']:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }

    button[data-variant='secondary'][data-type='neutral']:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }

    button[data-type='success']:hover:enabled {
      background-color: ${({tokens:e})=>e.core.backgroundSuccess};
    }

    button[data-type='error']:hover:enabled {
      background-color: ${({tokens:e})=>e.core.backgroundError};
    }
  }

  /* -- Focus --------------------------------------------------- */
  button:focus-visible {
    box-shadow: 0 0 0 4px ${({tokens:e})=>e.core.foregroundAccent020};
  }

  /* -- Properties --------------------------------------------------- */
  button[data-full-width='true'] {
    width: 100%;
  }

  :host([fullWidth]) {
    width: 100%;
  }

  button[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,w=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},T=class extends f{constructor(){super(...arguments),this.icon=`card`,this.variant=`primary`,this.type=`accent`,this.size=`md`,this.iconSize=void 0,this.fullWidth=!1,this.disabled=!1}render(){return y`<button
      data-variant=${this.variant}
      data-type=${this.type}
      data-size=${this.size}
      data-full-width=${this.fullWidth}
      ?disabled=${this.disabled}
    >
      <wui-icon color="inherit" name=${this.icon} size=${_(this.iconSize)}></wui-icon>
    </button>`}};T.styles=[te,re,fe],w([x()],T.prototype,`icon`,void 0),w([x()],T.prototype,`variant`,void 0),w([x()],T.prototype,`type`,void 0),w([x()],T.prototype,`size`,void 0),w([x()],T.prototype,`iconSize`,void 0),w([x({type:Boolean})],T.prototype,`fullWidth`,void 0),w([x({type:Boolean})],T.prototype,`disabled`,void 0),T=w([l(`wui-icon-button`)],T);var E={INVALID_PAYMENT_CONFIG:`INVALID_PAYMENT_CONFIG`,INVALID_RECIPIENT:`INVALID_RECIPIENT`,INVALID_ASSET:`INVALID_ASSET`,INVALID_AMOUNT:`INVALID_AMOUNT`,UNKNOWN_ERROR:`UNKNOWN_ERROR`,UNABLE_TO_INITIATE_PAYMENT:`UNABLE_TO_INITIATE_PAYMENT`,INVALID_CHAIN_NAMESPACE:`INVALID_CHAIN_NAMESPACE`,GENERIC_PAYMENT_ERROR:`GENERIC_PAYMENT_ERROR`,UNABLE_TO_GET_EXCHANGES:`UNABLE_TO_GET_EXCHANGES`,ASSET_NOT_SUPPORTED:`ASSET_NOT_SUPPORTED`,UNABLE_TO_GET_PAY_URL:`UNABLE_TO_GET_PAY_URL`,UNABLE_TO_GET_BUY_STATUS:`UNABLE_TO_GET_BUY_STATUS`,UNABLE_TO_GET_TOKEN_BALANCES:`UNABLE_TO_GET_TOKEN_BALANCES`,UNABLE_TO_GET_QUOTE:`UNABLE_TO_GET_QUOTE`,UNABLE_TO_GET_QUOTE_STATUS:`UNABLE_TO_GET_QUOTE_STATUS`,INVALID_RECIPIENT_ADDRESS_FOR_ASSET:`INVALID_RECIPIENT_ADDRESS_FOR_ASSET`},D={[E.INVALID_PAYMENT_CONFIG]:`Invalid payment configuration`,[E.INVALID_RECIPIENT]:`Invalid recipient address`,[E.INVALID_ASSET]:`Invalid asset specified`,[E.INVALID_AMOUNT]:`Invalid payment amount`,[E.INVALID_RECIPIENT_ADDRESS_FOR_ASSET]:`Invalid recipient address for the asset selected`,[E.UNKNOWN_ERROR]:`Unknown payment error occurred`,[E.UNABLE_TO_INITIATE_PAYMENT]:`Unable to initiate payment`,[E.INVALID_CHAIN_NAMESPACE]:`Invalid chain namespace`,[E.GENERIC_PAYMENT_ERROR]:`Unable to process payment`,[E.UNABLE_TO_GET_EXCHANGES]:`Unable to get exchanges`,[E.ASSET_NOT_SUPPORTED]:`Asset not supported by the selected exchange`,[E.UNABLE_TO_GET_PAY_URL]:`Unable to get payment URL`,[E.UNABLE_TO_GET_BUY_STATUS]:`Unable to get buy status`,[E.UNABLE_TO_GET_TOKEN_BALANCES]:`Unable to get token balances`,[E.UNABLE_TO_GET_QUOTE]:`Unable to get quote. Please choose a different token`,[E.UNABLE_TO_GET_QUOTE_STATUS]:`Unable to get quote status`},O=class e extends Error{get message(){return D[this.code]}constructor(t,n){super(D[t]),this.name=`AppKitPayError`,this.code=t,this.details=n,Error.captureStackTrace&&Error.captureStackTrace(this,e)}},pe=`https://rpc.walletconnect.org/v1/json-rpc`,me=`reown_test`;function he(){let{chainNamespace:e}=m.parseCaipNetworkId(z.state.paymentAsset.network);if(!t.isAddress(z.state.recipient,e))throw new O(E.INVALID_RECIPIENT_ADDRESS_FOR_ASSET,`Provide valid recipient address for namespace "${e}"`)}async function ge(e,t,n){if(t!==r.CHAIN.EVM)throw new O(E.INVALID_CHAIN_NAMESPACE);if(!n.fromAddress)throw new O(E.INVALID_PAYMENT_CONFIG,`fromAddress is required for native EVM payments.`);let i=typeof n.amount==`string`?parseFloat(n.amount):n.amount;if(isNaN(i))throw new O(E.INVALID_PAYMENT_CONFIG);let a=e.metadata?.decimals??18,o=u.parseUnits(i.toString(),a);if(typeof o!=`bigint`)throw new O(E.GENERIC_PAYMENT_ERROR);return await u.sendTransaction({chainNamespace:t,to:n.recipient,address:n.fromAddress,value:o,data:`0x`})??void 0}async function _e(e,t){if(!t.fromAddress)throw new O(E.INVALID_PAYMENT_CONFIG,`fromAddress is required for ERC20 EVM payments.`);let n=e.asset,i=t.recipient,a=Number(e.metadata.decimals),o=u.parseUnits(t.amount.toString(),a);if(o===void 0)throw new O(E.GENERIC_PAYMENT_ERROR);return await u.writeContract({fromAddress:t.fromAddress,tokenAddress:n,args:[i,o],method:`transfer`,abi:ce.getERC20Abi(n),chainNamespace:r.CHAIN.EVM})??void 0}async function ve(e,t){if(e!==r.CHAIN.SOLANA)throw new O(E.INVALID_CHAIN_NAMESPACE);if(!t.fromAddress)throw new O(E.INVALID_PAYMENT_CONFIG,`fromAddress is required for Solana payments.`);let n=typeof t.amount==`string`?parseFloat(t.amount):t.amount;if(isNaN(n)||n<=0)throw new O(E.INVALID_PAYMENT_CONFIG,`Invalid payment amount.`);try{if(!se.getProvider(e))throw new O(E.GENERIC_PAYMENT_ERROR,`No Solana provider available.`);let i=await u.sendTransaction({chainNamespace:r.CHAIN.SOLANA,to:t.recipient,value:n,tokenMint:t.tokenMint});if(!i)throw new O(E.GENERIC_PAYMENT_ERROR,`Transaction failed.`);return i}catch(e){throw e instanceof O?e:new O(E.GENERIC_PAYMENT_ERROR,`Solana payment failed: ${e}`)}}async function ye({sourceToken:e,toToken:t,amount:n,recipient:r}){let i=u.parseUnits(n,e.metadata.decimals),a=u.parseUnits(n,t.metadata.decimals);return Promise.resolve({type:L,origin:{amount:i?.toString()??`0`,currency:e},destination:{amount:a?.toString()??`0`,currency:t},fees:[{id:`service`,label:`Service Fee`,amount:`0`,currency:t}],steps:[{requestId:L,type:`deposit`,deposit:{amount:i?.toString()??`0`,currency:e.asset,receiver:r}}],timeInSeconds:6})}function k(e){if(!e)return null;let t=e.steps[0];return!t||t.type!==Le?null:t}function A(e,t=0){if(!e)return[];let n=e.steps.filter(e=>e.type===Re),r=n.filter((e,n)=>n+1>t);return n.length>0&&n.length<3?r:[]}var j=new ue({baseUrl:t.getApiUrl(),clientId:null}),be=class extends Error{};function xe(){return`${pe}?projectId=${C.getSnapshot().projectId}`}function M(){let{projectId:e,sdkType:t,sdkVersion:n}=C.state;return{projectId:e,st:t||`appkit`,sv:n||`html-wagmi-4.2.2`}}async function N(e,t){let n=xe(),{sdkType:r,sdkVersion:i,projectId:a}=C.getSnapshot(),o={jsonrpc:`2.0`,id:1,method:e,params:{...t||{},st:r,sv:i,projectId:a}},s=await(await fetch(n,{method:`POST`,body:JSON.stringify(o),headers:{"Content-Type":`application/json`}})).json();if(s.error)throw new be(s.error.message);return s}async function Se(e){return(await N(`reown_getExchanges`,e)).result}async function Ce(e){return(await N(`reown_getExchangePayUrl`,e)).result}async function we(e){return(await N(`reown_getExchangeBuyStatus`,e)).result}async function Te(e){let t=d.bigNumber(e.amount).times(10**e.toToken.metadata.decimals).toString(),{chainId:n,chainNamespace:r}=m.parseCaipNetworkId(e.sourceToken.network),{chainId:i,chainNamespace:a}=m.parseCaipNetworkId(e.toToken.network),o=e.sourceToken.asset===`native`?ee(r):e.sourceToken.asset,s=e.toToken.asset===`native`?ee(a):e.toToken.asset;return await j.post({path:`/appkit/v1/transfers/quote`,body:{user:e.address,originChainId:n.toString(),originCurrency:o,destinationChainId:i.toString(),destinationCurrency:s,recipient:e.recipient,amount:t},params:M()})}async function Ee(e){let t=o.isLowerCaseMatch(e.sourceToken.network,e.toToken.network),n=o.isLowerCaseMatch(e.sourceToken.asset,e.toToken.asset);return t&&n?ye(e):Te(e)}async function De(e){return await j.get({path:`/appkit/v1/transfers/status`,params:{requestId:e.requestId,...M()}})}async function Oe(e){return await j.get({path:`/appkit/v1/transfers/assets/exchanges/${e}`,params:M()})}var ke=[`eip155`,`solana`],Ae={eip155:{native:{assetNamespace:`slip44`,assetReference:`60`},defaultTokenNamespace:`erc20`},solana:{native:{assetNamespace:`slip44`,assetReference:`501`},defaultTokenNamespace:`token`}},je={56:`714`,204:`714`};function P(e,t){let{chainNamespace:n,chainId:r}=m.parseCaipNetworkId(e),i=Ae[n];if(!i)throw Error(`Unsupported chain namespace for CAIP-19 formatting: ${n}`);let a=i.native.assetNamespace,o=i.native.assetReference;return t===`native`?n===`eip155`&&je[r]&&(o=je[r]):(a=i.defaultTokenNamespace,o=t),`${`${n}:${r}`}/${a}:${o}`}function Me(e){let{chainNamespace:t}=m.parseCaipNetworkId(e);return ke.includes(t)}function Ne(e){let n=h.getAllRequestedCaipNetworks().find(t=>t.caipNetworkId===e.chainId),r=e.address;if(!n)throw Error(`Target network not found for balance chainId "${e.chainId}"`);if(o.isLowerCaseMatch(e.symbol,n.nativeCurrency.symbol))r=`native`;else if(t.isCaipAddress(r)){let{address:e}=m.parseCaipAddress(r);r=e}else if(!r)throw Error(`Balance address not found for balance symbol "${e.symbol}"`);return{network:n.caipNetworkId,asset:r,metadata:{name:e.name,symbol:e.symbol,decimals:Number(e.quantity.decimals),logoURI:e.iconUrl},amount:e.quantity.numeric}}function Pe(e){return{chainId:e.network,address:`${e.network}:${e.asset}`,symbol:e.metadata.symbol,name:e.metadata.name,iconUrl:e.metadata.logoURI||``,price:0,quantity:{numeric:`0`,decimals:e.metadata.decimals.toString()}}}function F(e){let t=d.bigNumber(e,{safe:!0});return t.lt(.001)?`<0.001`:t.round(4).toString()}function Fe(e){let t=h.getAllRequestedCaipNetworks().find(t=>t.caipNetworkId===e.network);return t?!!t.testnet:!1}var Ie=0,I=`unknown`,L=`direct-transfer`,Le=`deposit`,Re=`transaction`,R=e({paymentAsset:{network:`eip155:1`,asset:`0x0`,metadata:{name:`0x0`,symbol:`0x0`,decimals:0}},recipient:`0x0`,amount:0,isConfigured:!1,error:null,isPaymentInProgress:!1,exchanges:[],isLoading:!1,openInNewTab:!0,redirectUrl:void 0,payWithExchange:void 0,currentPayment:void 0,analyticsSet:!1,paymentId:void 0,choice:`pay`,tokenBalances:{[r.CHAIN.EVM]:[],[r.CHAIN.SOLANA]:[]},isFetchingTokenBalances:!1,selectedPaymentAsset:null,quote:void 0,quoteStatus:`waiting`,quoteError:null,isFetchingQuote:!1,selectedExchange:void 0,exchangeUrlForQuote:void 0,requestId:void 0}),z={state:R,subscribe(e){return ie(R,()=>e(R))},subscribeKey(e,t){return le(R,e,t)},async handleOpenPay(e){this.resetState(),this.setPaymentConfig(e),this.initializeAnalytics(),he(),await this.prepareTokenLogo(),R.isConfigured=!0,g.sendEvent({type:`track`,event:`PAY_MODAL_OPEN`,properties:{exchanges:R.exchanges,configuration:{network:R.paymentAsset.network,asset:R.paymentAsset.asset,recipient:R.recipient,amount:R.amount}}}),await S.open({view:`Pay`})},resetState(){R.paymentAsset={network:`eip155:1`,asset:`0x0`,metadata:{name:`0x0`,symbol:`0x0`,decimals:0}},R.recipient=`0x0`,R.amount=0,R.isConfigured=!1,R.error=null,R.isPaymentInProgress=!1,R.isLoading=!1,R.currentPayment=void 0,R.selectedExchange=void 0,R.exchangeUrlForQuote=void 0,R.requestId=void 0},resetQuoteState(){R.quote=void 0,R.quoteStatus=`waiting`,R.quoteError=null,R.isFetchingQuote=!1,R.requestId=void 0},setPaymentConfig(e){if(!e.paymentAsset)throw new O(E.INVALID_PAYMENT_CONFIG);try{R.choice=e.choice??`pay`,R.paymentAsset=e.paymentAsset,R.recipient=e.recipient,R.amount=e.amount,R.openInNewTab=e.openInNewTab??!0,R.redirectUrl=e.redirectUrl,R.payWithExchange=e.payWithExchange,R.error=null}catch(e){throw new O(E.INVALID_PAYMENT_CONFIG,e.message)}},setSelectedPaymentAsset(e){R.selectedPaymentAsset=e},setSelectedExchange(e){R.selectedExchange=e},setRequestId(e){R.requestId=e},setPaymentInProgress(e){R.isPaymentInProgress=e},getPaymentAsset(){return R.paymentAsset},getExchanges(){return R.exchanges},async fetchExchanges(){try{R.isLoading=!0,R.exchanges=(await Se({page:Ie})).exchanges.slice(0,2)}catch{throw v.showError(D.UNABLE_TO_GET_EXCHANGES),new O(E.UNABLE_TO_GET_EXCHANGES)}finally{R.isLoading=!1}},async getAvailableExchanges(e){try{let t=e!=null&&e.asset&&e!=null&&e.network?P(e.network,e.asset):void 0;return await Se({page:e?.page??Ie,asset:t,amount:(e?.amount)?.toString()})}catch{throw new O(E.UNABLE_TO_GET_EXCHANGES)}},async getPayUrl(e,t,n=!1){try{let r=Number(t.amount),i=await Ce({exchangeId:e,asset:P(t.network,t.asset),amount:r.toString(),recipient:`${t.network}:${t.recipient}`});return g.sendEvent({type:`track`,event:`PAY_EXCHANGE_SELECTED`,properties:{source:`pay`,exchange:{id:e},configuration:{network:t.network,asset:t.asset,recipient:t.recipient,amount:r},currentPayment:{type:`exchange`,exchangeId:e},headless:n}}),n&&(this.initiatePayment(),g.sendEvent({type:`track`,event:`PAY_INITIATED`,properties:{source:`pay`,paymentId:R.paymentId||I,configuration:{network:t.network,asset:t.asset,recipient:t.recipient,amount:r},currentPayment:{type:`exchange`,exchangeId:e}}})),i}catch(e){throw e instanceof Error&&e.message.includes(`is not supported`)?new O(E.ASSET_NOT_SUPPORTED):Error(e.message)}},async generateExchangeUrlForQuote({exchangeId:e,paymentAsset:t,amount:n,recipient:r}){let i=await Ce({exchangeId:e,asset:P(t.network,t.asset),amount:n.toString(),recipient:r});R.exchangeSessionId=i.sessionId,R.exchangeUrlForQuote=i.url},async openPayUrl(e,n,r=!1){try{let i=await this.getPayUrl(e.exchangeId,n,r);if(!i)throw new O(E.UNABLE_TO_GET_PAY_URL);let a=e.openInNewTab??!0?`_blank`:`_self`;return t.openHref(i.url,a),i}catch(e){throw e instanceof O?R.error=e.message:R.error=D.GENERIC_PAYMENT_ERROR,new O(E.UNABLE_TO_GET_PAY_URL)}},async onTransfer({chainNamespace:e,fromAddress:t,toAddress:n,amount:i,paymentAsset:a}){if(R.currentPayment={type:`wallet`,status:`IN_PROGRESS`},!R.isPaymentInProgress)try{this.initiatePayment();let s=h.getAllRequestedCaipNetworks().find(e=>e.caipNetworkId===a.network);if(!s)throw Error(`Target network not found`);let c=h.state.activeCaipNetwork;switch(o.isLowerCaseMatch(c?.caipNetworkId,s.caipNetworkId)||await h.switchActiveNetwork(s),e){case r.CHAIN.EVM:a.asset===`native`&&(R.currentPayment.result=await ge(a,e,{recipient:n,amount:i,fromAddress:t})),a.asset.startsWith(`0x`)&&(R.currentPayment.result=await _e(a,{recipient:n,amount:i,fromAddress:t})),R.currentPayment.status=`SUCCESS`;break;case r.CHAIN.SOLANA:R.currentPayment.result=await ve(e,{recipient:n,amount:i,fromAddress:t,tokenMint:a.asset===`native`?void 0:a.asset}),R.currentPayment.status=`SUCCESS`;break;default:throw new O(E.INVALID_CHAIN_NAMESPACE)}}catch(e){throw e instanceof O?R.error=e.message:R.error=D.GENERIC_PAYMENT_ERROR,R.currentPayment.status=`FAILED`,v.showError(R.error),e}finally{R.isPaymentInProgress=!1}},async onSendTransaction(e){try{let{namespace:t,transactionStep:n}=e;z.initiatePayment();let i=h.getAllRequestedCaipNetworks().find(e=>e.caipNetworkId===R.paymentAsset?.network);if(!i)throw Error(`Target network not found`);let a=h.state.activeCaipNetwork;if(o.isLowerCaseMatch(a?.caipNetworkId,i.caipNetworkId)||await h.switchActiveNetwork(i),t===r.CHAIN.EVM){let{from:e,to:r,data:i,value:a}=n.transaction;await u.sendTransaction({address:e,to:r,data:i,value:BigInt(a),chainNamespace:t})}else if(t===r.CHAIN.SOLANA){let{instructions:e}=n.transaction;await u.writeSolanaTransaction({instructions:e})}}catch(e){throw e instanceof O?R.error=e.message:R.error=D.GENERIC_PAYMENT_ERROR,v.showError(R.error),e}finally{R.isPaymentInProgress=!1}},getExchangeById(e){return R.exchanges.find(t=>t.id===e)},validatePayConfig(e){let{paymentAsset:t,recipient:n,amount:r}=e;if(!t)throw new O(E.INVALID_PAYMENT_CONFIG);if(!n)throw new O(E.INVALID_RECIPIENT);if(!t.asset)throw new O(E.INVALID_ASSET);if(r==null||r<=0)throw new O(E.INVALID_AMOUNT)},async handlePayWithExchange(e){try{R.currentPayment={type:`exchange`,exchangeId:e};let{network:t,asset:n}=R.paymentAsset,r={network:t,asset:n,amount:R.amount,recipient:R.recipient},i=await this.getPayUrl(e,r);if(!i)throw new O(E.UNABLE_TO_INITIATE_PAYMENT);return R.currentPayment.sessionId=i.sessionId,R.currentPayment.status=`IN_PROGRESS`,R.currentPayment.exchangeId=e,this.initiatePayment(),{url:i.url,openInNewTab:R.openInNewTab}}catch(e){return e instanceof O?R.error=e.message:R.error=D.GENERIC_PAYMENT_ERROR,R.isPaymentInProgress=!1,v.showError(R.error),null}},async getBuyStatus(e,n){try{let r=await we({sessionId:n,exchangeId:e});return(r.status===`SUCCESS`||r.status===`FAILED`)&&g.sendEvent({type:`track`,event:r.status===`SUCCESS`?`PAY_SUCCESS`:`PAY_ERROR`,properties:{message:r.status===`FAILED`?t.parseError(R.error):void 0,source:`pay`,paymentId:R.paymentId||I,configuration:{network:R.paymentAsset.network,asset:R.paymentAsset.asset,recipient:R.recipient,amount:R.amount},currentPayment:{type:`exchange`,exchangeId:R.currentPayment?.exchangeId,sessionId:R.currentPayment?.sessionId,result:r.txHash}}}),r}catch{throw new O(E.UNABLE_TO_GET_BUY_STATUS)}},async fetchTokensFromEOA({caipAddress:e,caipNetwork:t,namespace:n}){if(!e)return[];let{address:i}=m.parseCaipAddress(e),a=t;return n===r.CHAIN.EVM&&(a=void 0),await ae.getMyTokensWithBalance({address:i,caipNetwork:a})},async fetchTokensFromExchange(){if(!R.selectedExchange)return[];let e=await Oe(R.selectedExchange.id),n=Object.values(e.assets).flat();return await Promise.all(n.map(async e=>{let n=Pe(e),{chainNamespace:r}=m.parseCaipNetworkId(n.chainId),i=n.address;if(t.isCaipAddress(i)){let{address:e}=m.parseCaipAddress(i);i=e}return n.iconUrl=await c.getImageByToken(i??``,r).catch(()=>{})??``,n}))},async fetchTokens({caipAddress:e,caipNetwork:t,namespace:n}){try{R.isFetchingTokenBalances=!0;let r=await(R.selectedExchange?this.fetchTokensFromExchange():this.fetchTokensFromEOA({caipAddress:e,caipNetwork:t,namespace:n}));R.tokenBalances={...R.tokenBalances,[n]:r}}catch(e){let t=e instanceof Error?e.message:`Unable to get token balances`;v.showError(t)}finally{R.isFetchingTokenBalances=!1}},async fetchQuote({amount:e,address:t,sourceToken:n,toToken:r,recipient:i}){try{z.resetQuoteState(),R.isFetchingQuote=!0;let a=await Ee({amount:e,address:R.selectedExchange?void 0:t,sourceToken:n,toToken:r,recipient:i});if(R.selectedExchange){let e=k(a);if(e){let t=`${n.network}:${e.deposit.receiver}`,r=d.formatNumber(e.deposit.amount,{decimals:n.metadata.decimals??0,round:8});await z.generateExchangeUrlForQuote({exchangeId:R.selectedExchange.id,paymentAsset:n,amount:r.toString(),recipient:t})}}R.quote=a}catch(e){let t=D.UNABLE_TO_GET_QUOTE;if(e instanceof Error&&e.cause&&e.cause instanceof Response)try{let n=await e.cause.json();n.error&&typeof n.error==`string`&&(t=n.error)}catch{}throw R.quoteError=t,v.showError(t),new O(E.UNABLE_TO_GET_QUOTE)}finally{R.isFetchingQuote=!1}},async fetchQuoteStatus({requestId:e}){try{if(e===L){let e=R.selectedExchange,t=R.exchangeSessionId;if(e&&t){switch((await this.getBuyStatus(e.id,t)).status){case`IN_PROGRESS`:R.quoteStatus=`waiting`;break;case`SUCCESS`:R.quoteStatus=`success`,R.isPaymentInProgress=!1;break;case`FAILED`:R.quoteStatus=`failure`,R.isPaymentInProgress=!1;break;case`UNKNOWN`:R.quoteStatus=`waiting`;break;default:R.quoteStatus=`waiting`;break}return}R.quoteStatus=`success`;return}let{status:t}=await De({requestId:e});R.quoteStatus=t}catch{throw R.quoteStatus=`failure`,new O(E.UNABLE_TO_GET_QUOTE_STATUS)}},initiatePayment(){R.isPaymentInProgress=!0,R.paymentId=crypto.randomUUID()},initializeAnalytics(){R.analyticsSet||(R.analyticsSet=!0,this.subscribeKey(`isPaymentInProgress`,e=>{var n;if((n=R.currentPayment)!=null&&n.status&&R.currentPayment.status!==`UNKNOWN`){let e={IN_PROGRESS:`PAY_INITIATED`,SUCCESS:`PAY_SUCCESS`,FAILED:`PAY_ERROR`}[R.currentPayment.status];g.sendEvent({type:`track`,event:e,properties:{message:R.currentPayment.status===`FAILED`?t.parseError(R.error):void 0,source:`pay`,paymentId:R.paymentId||I,configuration:{network:R.paymentAsset.network,asset:R.paymentAsset.asset,recipient:R.recipient,amount:R.amount},currentPayment:{type:R.currentPayment.type,exchangeId:R.currentPayment.exchangeId,sessionId:R.currentPayment.sessionId,result:R.currentPayment.result}}})}}))},async prepareTokenLogo(){if(!R.paymentAsset.metadata.logoURI)try{let{chainNamespace:e}=m.parseCaipNetworkId(R.paymentAsset.network),t=await c.getImageByToken(R.paymentAsset.asset,e);R.paymentAsset.metadata.logoURI=t}catch{}}},ze=p`
  wui-separator {
    margin: var(--apkt-spacing-3) calc(var(--apkt-spacing-3) * -1) var(--apkt-spacing-2)
      calc(var(--apkt-spacing-3) * -1);
    width: calc(100% + var(--apkt-spacing-3) * 2);
  }

  .token-display {
    padding: var(--apkt-spacing-3) var(--apkt-spacing-3);
    border-radius: var(--apkt-borderRadius-5);
    background-color: var(--apkt-tokens-theme-backgroundPrimary);
    margin-top: var(--apkt-spacing-3);
    margin-bottom: var(--apkt-spacing-3);
  }

  .token-display wui-text {
    text-transform: none;
  }

  wui-loading-spinner {
    padding: var(--apkt-spacing-2);
  }

  .left-image-container {
    position: relative;
    justify-content: center;
    align-items: center;
  }

  .token-image {
    border-radius: ${({borderRadius:e})=>e.round};
    width: 40px;
    height: 40px;
  }

  .chain-image {
    position: absolute;
    width: 20px;
    height: 20px;
    bottom: -3px;
    right: -5px;
    border-radius: ${({borderRadius:e})=>e.round};
    border: 2px solid ${({tokens:e})=>e.theme.backgroundPrimary};
  }

  .payment-methods-container {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-top-right-radius: ${({borderRadius:e})=>e[8]};
    border-top-left-radius: ${({borderRadius:e})=>e[8]};
  }
`,B=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},V=class extends f{constructor(){super(),this.unsubscribe=[],this.amount=z.state.amount,this.namespace=void 0,this.paymentAsset=z.state.paymentAsset,this.activeConnectorIds=i.state.activeConnectorIds,this.caipAddress=void 0,this.exchanges=z.state.exchanges,this.isLoading=z.state.isLoading,this.initializeNamespace(),this.unsubscribe.push(z.subscribeKey(`amount`,e=>this.amount=e)),this.unsubscribe.push(i.subscribeKey(`activeConnectorIds`,e=>this.activeConnectorIds=e)),this.unsubscribe.push(z.subscribeKey(`exchanges`,e=>this.exchanges=e)),this.unsubscribe.push(z.subscribeKey(`isLoading`,e=>this.isLoading=e)),z.fetchExchanges(),z.setSelectedExchange(void 0)}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return y`
      <wui-flex flexDirection="column">
        ${this.paymentDetailsTemplate()} ${this.paymentMethodsTemplate()}
      </wui-flex>
    `}paymentMethodsTemplate(){return y`
      <wui-flex flexDirection="column" padding="3" gap="2" class="payment-methods-container">
        ${this.payWithWalletTemplate()} ${this.templateSeparator()}
        ${this.templateExchangeOptions()}
      </wui-flex>
    `}initializeNamespace(){let e=h.state.activeChain;this.namespace=e,this.caipAddress=h.getAccountData(e)?.caipAddress,this.unsubscribe.push(h.subscribeChainProp(`accountState`,e=>{this.caipAddress=e?.caipAddress},e))}paymentDetailsTemplate(){let e=h.getAllRequestedCaipNetworks().find(e=>e.caipNetworkId===this.paymentAsset.network);return y`
      <wui-flex
        alignItems="center"
        justifyContent="space-between"
        .padding=${[`6`,`8`,`6`,`8`]}
        gap="2"
      >
        <wui-flex alignItems="center" gap="1">
          <wui-text variant="h1-regular" color="primary">
            ${F(this.amount||`0`)}
          </wui-text>

          <wui-flex flexDirection="column">
            <wui-text variant="h6-regular" color="secondary">
              ${this.paymentAsset.metadata.symbol||`Unknown`}
            </wui-text>
            <wui-text variant="md-medium" color="secondary"
              >on ${e?.name||`Unknown`}</wui-text
            >
          </wui-flex>
        </wui-flex>

        <wui-flex class="left-image-container">
          <wui-image
            src=${_(this.paymentAsset.metadata.logoURI)}
            class="token-image"
          ></wui-image>
          <wui-image
            src=${_(c.getNetworkImage(e))}
            class="chain-image"
          ></wui-image>
        </wui-flex>
      </wui-flex>
    `}payWithWalletTemplate(){return Me(this.paymentAsset.network)?this.caipAddress?this.connectedWalletTemplate():this.disconnectedWalletTemplate():y``}connectedWalletTemplate(){let{name:e,image:t}=this.getWalletProperties({namespace:this.namespace});return y`
      <wui-flex flexDirection="column" gap="3">
        <wui-list-item
          type="secondary"
          boxColor="foregroundSecondary"
          @click=${this.onWalletPayment}
          .boxed=${!1}
          ?chevron=${!0}
          ?fullSize=${!1}
          ?rounded=${!0}
          data-testid="wallet-payment-option"
          imageSrc=${_(t)}
          imageSize="3xl"
        >
          <wui-text variant="lg-regular" color="primary">Pay with ${e}</wui-text>
        </wui-list-item>

        <wui-list-item
          type="secondary"
          icon="power"
          iconColor="error"
          @click=${this.onDisconnect}
          data-testid="disconnect-button"
          ?chevron=${!1}
          boxColor="foregroundSecondary"
        >
          <wui-text variant="lg-regular" color="secondary">Disconnect</wui-text>
        </wui-list-item>
      </wui-flex>
    `}disconnectedWalletTemplate(){return y`<wui-list-item
      type="secondary"
      boxColor="foregroundSecondary"
      variant="icon"
      iconColor="default"
      iconVariant="overlay"
      icon="wallet"
      @click=${this.onWalletPayment}
      ?chevron=${!0}
      data-testid="wallet-payment-option"
    >
      <wui-text variant="lg-regular" color="primary">Pay with wallet</wui-text>
    </wui-list-item>`}templateExchangeOptions(){if(this.isLoading)return y`<wui-flex justifyContent="center" alignItems="center">
        <wui-loading-spinner size="md"></wui-loading-spinner>
      </wui-flex>`;let e=this.exchanges.filter(e=>Fe(this.paymentAsset)?e.id===me:e.id!==me);return e.length===0?y`<wui-flex justifyContent="center" alignItems="center">
        <wui-text variant="md-medium" color="primary">No exchanges available</wui-text>
      </wui-flex>`:e.map(e=>y`
        <wui-list-item
          type="secondary"
          boxColor="foregroundSecondary"
          @click=${()=>this.onExchangePayment(e)}
          data-testid="exchange-option-${e.id}"
          ?chevron=${!0}
          imageSrc=${_(e.imageUrl)}
        >
          <wui-text flexGrow="1" variant="lg-regular" color="primary">
            Pay with ${e.name}
          </wui-text>
        </wui-list-item>
      `)}templateSeparator(){return y`<wui-separator text="or" bgColor="secondary"></wui-separator>`}async onWalletPayment(){if(!this.namespace)throw Error(`Namespace not found`);this.caipAddress?n.push(`PayQuote`):(await i.connect(),await S.open({view:`PayQuote`}))}onExchangePayment(e){z.setSelectedExchange(e),n.push(`PayQuote`)}async onDisconnect(){try{await u.disconnect(),await S.open({view:`Pay`})}catch{console.error(`Failed to disconnect`),v.showError(`Failed to disconnect`)}}getWalletProperties({namespace:e}){if(!e)return{name:void 0,image:void 0};let t=this.activeConnectorIds[e];if(!t)return{name:void 0,image:void 0};let n=i.getConnector({id:t,namespace:e});if(!n)return{name:void 0,image:void 0};let r=c.getConnectorImage(n);return{name:n.name,image:r}}};V.styles=ze,B([b()],V.prototype,`amount`,void 0),B([b()],V.prototype,`namespace`,void 0),B([b()],V.prototype,`paymentAsset`,void 0),B([b()],V.prototype,`activeConnectorIds`,void 0),B([b()],V.prototype,`caipAddress`,void 0),B([b()],V.prototype,`exchanges`,void 0),B([b()],V.prototype,`isLoading`,void 0),V=B([l(`w3m-pay-view`)],V);var Be=p`
  :host {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .pulse-container {
    position: relative;
    width: var(--pulse-size);
    height: var(--pulse-size);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .pulse-rings {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }

  .pulse-ring {
    position: absolute;
    inset: 0;
    border-radius: 50%;
    border: 2px solid var(--pulse-color);
    opacity: 0;
    animation: pulse var(--pulse-duration, 2s) ease-out infinite;
  }

  .pulse-content {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @keyframes pulse {
    0% {
      transform: scale(0.5);
      opacity: var(--pulse-opacity, 0.3);
    }
    50% {
      opacity: calc(var(--pulse-opacity, 0.3) * 0.5);
    }
    100% {
      transform: scale(1.2);
      opacity: 0;
    }
  }
`,H=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Ve=3,He=2,Ue=.3,We=`200px`,Ge={"accent-primary":a.tokens.core.backgroundAccentPrimary},U=class extends f{constructor(){super(...arguments),this.rings=Ve,this.duration=He,this.opacity=Ue,this.size=We,this.variant=`accent-primary`}render(){let e=Ge[this.variant];return this.style.cssText=`
      --pulse-size: ${this.size};
      --pulse-duration: ${this.duration}s;
      --pulse-color: ${e};
      --pulse-opacity: ${this.opacity};
    `,y`
      <div class="pulse-container">
        <div class="pulse-rings">${Array.from({length:this.rings},(e,t)=>this.renderRing(t,this.rings))}</div>
        <div class="pulse-content">
          <slot></slot>
        </div>
      </div>
    `}renderRing(e,t){return y`<div class="pulse-ring" style=${`animation-delay: ${e/t*this.duration}s;`}></div>`}};U.styles=[te,Be],H([x({type:Number})],U.prototype,`rings`,void 0),H([x({type:Number})],U.prototype,`duration`,void 0),H([x({type:Number})],U.prototype,`opacity`,void 0),H([x()],U.prototype,`size`,void 0),H([x()],U.prototype,`variant`,void 0),U=H([l(`wui-pulse`)],U);var Ke=[{id:`received`,title:`Receiving funds`,icon:`dollar`},{id:`processing`,title:`Swapping asset`,icon:`recycleHorizontal`},{id:`sending`,title:`Sending asset to the recipient address`,icon:`send`}],qe=[`success`,`submitted`,`failure`,`timeout`,`refund`],Je=p`
  :host {
    display: block;
    height: 100%;
    width: 100%;
  }

  wui-image {
    border-radius: ${({borderRadius:e})=>e.round};
  }

  .token-badge-container {
    position: absolute;
    bottom: 6px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: ${({borderRadius:e})=>e[4]};
    z-index: 3;
    min-width: 105px;
  }

  .token-badge-container.loading {
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    border: 3px solid ${({tokens:e})=>e.theme.backgroundPrimary};
  }

  .token-badge-container.success {
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    border: 3px solid ${({tokens:e})=>e.theme.backgroundPrimary};
  }

  .token-image-container {
    position: relative;
  }

  .token-image {
    border-radius: ${({borderRadius:e})=>e.round};
    width: 64px;
    height: 64px;
  }

  .token-image.success {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  .token-image.error {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  .token-image.loading {
    background: ${({colors:e})=>e.accent010};
  }

  .token-image wui-icon {
    width: 32px;
    height: 32px;
  }

  .token-badge {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border: 1px solid ${({tokens:e})=>e.theme.foregroundSecondary};
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  .token-badge wui-text {
    white-space: nowrap;
  }

  .payment-lifecycle-container {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-top-right-radius: ${({borderRadius:e})=>e[6]};
    border-top-left-radius: ${({borderRadius:e})=>e[6]};
  }

  .payment-step-badge {
    padding: ${({spacing:e})=>e[1]} ${({spacing:e})=>e[2]};
    border-radius: ${({borderRadius:e})=>e[1]};
  }

  .payment-step-badge.loading {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  .payment-step-badge.error {
    background-color: ${({tokens:e})=>e.core.backgroundError};
  }

  .payment-step-badge.success {
    background-color: ${({tokens:e})=>e.core.backgroundSuccess};
  }

  .step-icon-container {
    position: relative;
    height: 40px;
    width: 40px;
    border-radius: ${({borderRadius:e})=>e.round};
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  .step-icon-box {
    position: absolute;
    right: -4px;
    bottom: -1px;
    padding: 2px;
    border-radius: ${({borderRadius:e})=>e.round};
    border: 2px solid ${({tokens:e})=>e.theme.backgroundPrimary};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  .step-icon-box.success {
    background-color: ${({tokens:e})=>e.core.backgroundSuccess};
  }
`,W=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Ye={received:[`pending`,`success`,`submitted`],processing:[`success`,`submitted`],sending:[`success`,`submitted`]},Xe=3e3,G=class extends f{constructor(){super(),this.unsubscribe=[],this.pollingInterval=null,this.paymentAsset=z.state.paymentAsset,this.quoteStatus=z.state.quoteStatus,this.quote=z.state.quote,this.amount=z.state.amount,this.namespace=void 0,this.caipAddress=void 0,this.profileName=null,this.activeConnectorIds=i.state.activeConnectorIds,this.selectedExchange=z.state.selectedExchange,this.initializeNamespace(),this.unsubscribe.push(z.subscribeKey(`quoteStatus`,e=>this.quoteStatus=e),z.subscribeKey(`quote`,e=>this.quote=e),i.subscribeKey(`activeConnectorIds`,e=>this.activeConnectorIds=e),z.subscribeKey(`selectedExchange`,e=>this.selectedExchange=e))}connectedCallback(){super.connectedCallback(),this.startPolling()}disconnectedCallback(){super.disconnectedCallback(),this.stopPolling(),this.unsubscribe.forEach(e=>e())}render(){return y`
      <wui-flex flexDirection="column" .padding=${[`3`,`0`,`0`,`0`]} gap="2">
        ${this.tokenTemplate()} ${this.paymentTemplate()} ${this.paymentLifecycleTemplate()}
      </wui-flex>
    `}tokenTemplate(){let e=F(this.amount||`0`),t=this.paymentAsset.metadata.symbol??`Unknown`,n=h.getAllRequestedCaipNetworks().find(e=>e.caipNetworkId===this.paymentAsset.network),r=this.quoteStatus===`failure`||this.quoteStatus===`timeout`||this.quoteStatus===`refund`;return this.quoteStatus===`success`||this.quoteStatus===`submitted`?y`<wui-flex alignItems="center" justifyContent="center">
        <wui-flex justifyContent="center" alignItems="center" class="token-image success">
          <wui-icon name="checkmark" color="success" size="inherit"></wui-icon>
        </wui-flex>
      </wui-flex>`:r?y`<wui-flex alignItems="center" justifyContent="center">
        <wui-flex justifyContent="center" alignItems="center" class="token-image error">
          <wui-icon name="close" color="error" size="inherit"></wui-icon>
        </wui-flex>
      </wui-flex>`:y`
      <wui-flex alignItems="center" justifyContent="center">
        <wui-flex class="token-image-container">
          <wui-pulse size="125px" rings="3" duration="4" opacity="0.5" variant="accent-primary">
            <wui-flex justifyContent="center" alignItems="center" class="token-image loading">
              <wui-icon name="paperPlaneTitle" color="accent-primary" size="inherit"></wui-icon>
            </wui-flex>
          </wui-pulse>

          <wui-flex
            justifyContent="center"
            alignItems="center"
            class="token-badge-container loading"
          >
            <wui-flex
              alignItems="center"
              justifyContent="center"
              gap="01"
              padding="1"
              class="token-badge"
            >
              <wui-image
                src=${_(c.getNetworkImage(n))}
                class="chain-image"
                size="mdl"
              ></wui-image>

              <wui-text variant="lg-regular" color="primary">${e} ${t}</wui-text>
            </wui-flex>
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}paymentTemplate(){return y`
      <wui-flex flexDirection="column" gap="2" .padding=${[`0`,`6`,`0`,`6`]}>
        ${this.renderPayment()}
        <wui-separator></wui-separator>
        ${this.renderWallet()}
      </wui-flex>
    `}paymentLifecycleTemplate(){let e=this.getStepsWithStatus();return y`
      <wui-flex flexDirection="column" padding="4" gap="2" class="payment-lifecycle-container">
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="md-regular" color="secondary">PAYMENT CYCLE</wui-text>

          ${this.renderPaymentCycleBadge()}
        </wui-flex>

        <wui-flex flexDirection="column" gap="5" .padding=${[`2`,`0`,`2`,`0`]}>
          ${e.map(e=>this.renderStep(e))}
        </wui-flex>
      </wui-flex>
    `}renderPaymentCycleBadge(){let e=this.quoteStatus===`failure`||this.quoteStatus===`timeout`||this.quoteStatus===`refund`,t=this.quoteStatus===`success`||this.quoteStatus===`submitted`;return e?y`
        <wui-flex
          justifyContent="center"
          alignItems="center"
          class="payment-step-badge error"
          gap="1"
        >
          <wui-icon name="close" color="error" size="xs"></wui-icon>
          <wui-text variant="sm-regular" color="error">Failed</wui-text>
        </wui-flex>
      `:t?y`
        <wui-flex
          justifyContent="center"
          alignItems="center"
          class="payment-step-badge success"
          gap="1"
        >
          <wui-icon name="checkmark" color="success" size="xs"></wui-icon>
          <wui-text variant="sm-regular" color="success">Completed</wui-text>
        </wui-flex>
      `:y`
      <wui-flex alignItems="center" justifyContent="space-between" gap="3">
        <wui-flex
          justifyContent="center"
          alignItems="center"
          class="payment-step-badge loading"
          gap="1"
        >
          <wui-icon name="clock" color="default" size="xs"></wui-icon>
          <wui-text variant="sm-regular" color="primary">Est. ${this.quote?.timeInSeconds??0} sec</wui-text>
        </wui-flex>

        <wui-icon name="chevronBottom" color="default" size="xxs"></wui-icon>
      </wui-flex>
    `}renderPayment(){let e=h.getAllRequestedCaipNetworks().find(e=>{let t=this.quote?.origin.currency.network;if(!t)return!1;let{chainId:n}=m.parseCaipNetworkId(t);return o.isLowerCaseMatch(e.id.toString(),n.toString())});return y`
      <wui-flex
        alignItems="flex-start"
        justifyContent="space-between"
        .padding=${[`3`,`0`,`3`,`0`]}
      >
        <wui-text variant="lg-regular" color="secondary">Payment Method</wui-text>

        <wui-flex flexDirection="column" alignItems="flex-end" gap="1">
          <wui-flex alignItems="center" gap="01">
            <wui-text variant="lg-regular" color="primary">${F(d.formatNumber(this.quote?.origin.amount||`0`,{decimals:this.quote?.origin.currency.metadata.decimals??0}).toString())}</wui-text>
            <wui-text variant="lg-regular" color="secondary">${this.quote?.origin.currency.metadata.symbol??`Unknown`}</wui-text>
          </wui-flex>

          <wui-flex alignItems="center" gap="1">
            <wui-text variant="md-regular" color="secondary">on</wui-text>
            <wui-image
              src=${_(c.getNetworkImage(e))}
              size="xs"
            ></wui-image>
            <wui-text variant="md-regular" color="secondary">${e?.name}</wui-text>
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}renderWallet(){return y`
      <wui-flex
        alignItems="flex-start"
        justifyContent="space-between"
        .padding=${[`3`,`0`,`3`,`0`]}
      >
        <wui-text variant="lg-regular" color="secondary">Wallet</wui-text>

        ${this.renderWalletText()}
      </wui-flex>
    `}renderWalletText(){let{image:e}=this.getWalletProperties({namespace:this.namespace}),{address:t}=this.caipAddress?m.parseCaipAddress(this.caipAddress):{},n=this.selectedExchange?.name;return this.selectedExchange?y`
        <wui-flex alignItems="center" justifyContent="flex-end" gap="1">
          <wui-text variant="lg-regular" color="primary">${n}</wui-text>
          <wui-image src=${_(this.selectedExchange.imageUrl)} size="mdl"></wui-image>
        </wui-flex>
      `:y`
      <wui-flex alignItems="center" justifyContent="flex-end" gap="1">
        <wui-text variant="lg-regular" color="primary">
          ${s.getTruncateString({string:this.profileName||t||n||``,charsStart:this.profileName?16:4,charsEnd:this.profileName?0:6,truncate:this.profileName?`end`:`middle`})}
        </wui-text>

        <wui-image src=${_(e)} size="mdl"></wui-image>
      </wui-flex>
    `}getStepsWithStatus(){return this.quoteStatus===`failure`||this.quoteStatus===`timeout`||this.quoteStatus===`refund`?Ke.map(e=>({...e,status:`failed`})):Ke.map(e=>{let t=(Ye[e.id]??[]).includes(this.quoteStatus)?`completed`:`pending`;return{...e,status:t}})}renderStep({title:e,icon:t,status:n}){return y`
      <wui-flex alignItems="center" gap="3">
        <wui-flex justifyContent="center" alignItems="center" class="step-icon-container">
          <wui-icon name=${t} color="default" size="mdl"></wui-icon>

          <wui-flex alignItems="center" justifyContent="center" class=${ne({"step-icon-box":!0,success:n===`completed`})}>
            ${this.renderStatusIndicator(n)}
          </wui-flex>
        </wui-flex>

        <wui-text variant="md-regular" color="primary">${e}</wui-text>
      </wui-flex>
    `}renderStatusIndicator(e){return e===`completed`?y`<wui-icon size="sm" color="success" name="checkmark"></wui-icon>`:e===`failed`?y`<wui-icon size="sm" color="error" name="close"></wui-icon>`:e===`pending`?y`<wui-loading-spinner color="accent-primary" size="sm"></wui-loading-spinner>`:null}startPolling(){this.pollingInterval||=(this.fetchQuoteStatus(),setInterval(()=>{this.fetchQuoteStatus()},Xe))}stopPolling(){this.pollingInterval&&=(clearInterval(this.pollingInterval),null)}async fetchQuoteStatus(){let e=z.state.requestId;if(!e||qe.includes(this.quoteStatus))this.stopPolling();else try{await z.fetchQuoteStatus({requestId:e}),qe.includes(this.quoteStatus)&&this.stopPolling()}catch{this.stopPolling()}}initializeNamespace(){let e=h.state.activeChain;this.namespace=e,this.caipAddress=h.getAccountData(e)?.caipAddress,this.profileName=h.getAccountData(e)?.profileName??null,this.unsubscribe.push(h.subscribeChainProp(`accountState`,e=>{this.caipAddress=e?.caipAddress,this.profileName=e?.profileName??null},e))}getWalletProperties({namespace:e}){if(!e)return{name:void 0,image:void 0};let t=this.activeConnectorIds[e];if(!t)return{name:void 0,image:void 0};let n=i.getConnector({id:t,namespace:e});if(!n)return{name:void 0,image:void 0};let r=c.getConnectorImage(n);return{name:n.name,image:r}}};G.styles=Je,W([b()],G.prototype,`paymentAsset`,void 0),W([b()],G.prototype,`quoteStatus`,void 0),W([b()],G.prototype,`quote`,void 0),W([b()],G.prototype,`amount`,void 0),W([b()],G.prototype,`namespace`,void 0),W([b()],G.prototype,`caipAddress`,void 0),W([b()],G.prototype,`profileName`,void 0),W([b()],G.prototype,`activeConnectorIds`,void 0),W([b()],G.prototype,`selectedExchange`,void 0),G=W([l(`w3m-pay-loading-view`)],G);var Ze=oe`
  :host {
    display: block;
  }
`,Qe=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},K=class extends f{render(){return y`
      <wui-flex flexDirection="column" gap="4">
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="md-regular" color="secondary">Pay</wui-text>
          <wui-shimmer width="60px" height="16px" borderRadius="4xs" variant="light"></wui-shimmer>
        </wui-flex>

        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="md-regular" color="secondary">Network Fee</wui-text>

          <wui-flex flexDirection="column" alignItems="flex-end" gap="2">
            <wui-shimmer
              width="75px"
              height="16px"
              borderRadius="4xs"
              variant="light"
            ></wui-shimmer>

            <wui-flex alignItems="center" gap="01">
              <wui-shimmer width="14px" height="14px" rounded variant="light"></wui-shimmer>
              <wui-shimmer
                width="49px"
                height="14px"
                borderRadius="4xs"
                variant="light"
              ></wui-shimmer>
            </wui-flex>
          </wui-flex>
        </wui-flex>

        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="md-regular" color="secondary">Service Fee</wui-text>
          <wui-shimmer width="75px" height="16px" borderRadius="4xs" variant="light"></wui-shimmer>
        </wui-flex>
      </wui-flex>
    `}};K.styles=[Ze],K=Qe([l(`w3m-pay-fees-skeleton`)],K);var $e=p`
  :host {
    display: block;
  }

  wui-image {
    border-radius: ${({borderRadius:e})=>e.round};
  }
`,et=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},q=class extends f{constructor(){super(),this.unsubscribe=[],this.quote=z.state.quote,this.unsubscribe.push(z.subscribeKey(`quote`,e=>this.quote=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return y`
      <wui-flex flexDirection="column" gap="4">
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="md-regular" color="secondary">Pay</wui-text>
          <wui-text variant="md-regular" color="primary">
            ${d.formatNumber(this.quote?.origin.amount||`0`,{decimals:this.quote?.origin.currency.metadata.decimals??0,round:6}).toString()} ${this.quote?.origin.currency.metadata.symbol||`Unknown`}
          </wui-text>
        </wui-flex>

        ${this.quote&&this.quote.fees.length>0?this.quote.fees.map(e=>this.renderFee(e)):null}
      </wui-flex>
    `}renderFee(e){let t=e.id===`network`,n=d.formatNumber(e.amount||`0`,{decimals:e.currency.metadata.decimals??0,round:6}).toString();if(t){let t=h.getAllRequestedCaipNetworks().find(t=>o.isLowerCaseMatch(t.caipNetworkId,e.currency.network));return y`
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="md-regular" color="secondary">${e.label}</wui-text>

          <wui-flex flexDirection="column" alignItems="flex-end" gap="2">
            <wui-text variant="md-regular" color="primary">
              ${n} ${e.currency.metadata.symbol||`Unknown`}
            </wui-text>

            <wui-flex alignItems="center" gap="01">
              <wui-image
                src=${_(c.getNetworkImage(t))}
                size="xs"
              ></wui-image>
              <wui-text variant="sm-regular" color="secondary">
                ${t?.name||`Unknown`}
              </wui-text>
            </wui-flex>
          </wui-flex>
        </wui-flex>
      `}return y`
      <wui-flex alignItems="center" justifyContent="space-between">
        <wui-text variant="md-regular" color="secondary">${e.label}</wui-text>
        <wui-text variant="md-regular" color="primary">
          ${n} ${e.currency.metadata.symbol||`Unknown`}
        </wui-text>
      </wui-flex>
    `}};q.styles=[$e],et([b()],q.prototype,`quote`,void 0),q=et([l(`w3m-pay-fees`)],q);var tt=p`
  :host {
    display: block;
    width: 100%;
  }

  .disabled-container {
    padding: ${({spacing:e})=>e[2]};
    min-height: 168px;
  }

  wui-icon {
    width: ${({spacing:e})=>e[8]};
    height: ${({spacing:e})=>e[8]};
  }

  wui-flex > wui-text {
    max-width: 273px;
  }
`,nt=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},J=class extends f{constructor(){super(),this.unsubscribe=[],this.selectedExchange=z.state.selectedExchange,this.unsubscribe.push(z.subscribeKey(`selectedExchange`,e=>this.selectedExchange=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return y`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap="3"
        class="disabled-container"
      >
        <wui-icon name="coins" color="default" size="inherit"></wui-icon>

        <wui-text variant="md-regular" color="primary" align="center">
          You don't have enough funds to complete this transaction
        </wui-text>

        ${this.selectedExchange?null:y`<wui-button
              size="md"
              variant="neutral-secondary"
              @click=${this.dispatchConnectOtherWalletEvent.bind(this)}
              >Connect other wallet</wui-button
            >`}
      </wui-flex>
    `}dispatchConnectOtherWalletEvent(){this.dispatchEvent(new CustomEvent(`connectOtherWallet`,{detail:!0,bubbles:!0,composed:!0}))}};J.styles=[tt],nt([x({type:Array})],J.prototype,`selectedExchange`,void 0),J=nt([l(`w3m-pay-options-empty`)],J);var rt=p`
  :host {
    display: block;
    width: 100%;
  }

  .pay-options-container {
    max-height: 196px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  .pay-options-container::-webkit-scrollbar {
    display: none;
  }

  .pay-option-container {
    border-radius: ${({borderRadius:e})=>e[4]};
    padding: ${({spacing:e})=>e[3]};
    min-height: 60px;
  }

  .token-images-container {
    position: relative;
    justify-content: center;
    align-items: center;
  }

  .chain-image {
    position: absolute;
    bottom: -3px;
    right: -5px;
    border: 2px solid ${({tokens:e})=>e.theme.foregroundSecondary};
  }
`,it=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},at=class extends f{render(){return y`
      <wui-flex flexDirection="column" gap="2" class="pay-options-container">
        ${this.renderOptionEntry()} ${this.renderOptionEntry()} ${this.renderOptionEntry()}
      </wui-flex>
    `}renderOptionEntry(){return y`
      <wui-flex
        alignItems="center"
        justifyContent="space-between"
        gap="2"
        class="pay-option-container"
      >
        <wui-flex alignItems="center" gap="2">
          <wui-flex class="token-images-container">
            <wui-shimmer
              width="32px"
              height="32px"
              rounded
              variant="light"
              class="token-image"
            ></wui-shimmer>
            <wui-shimmer
              width="16px"
              height="16px"
              rounded
              variant="light"
              class="chain-image"
            ></wui-shimmer>
          </wui-flex>

          <wui-flex flexDirection="column" gap="1">
            <wui-shimmer
              width="74px"
              height="16px"
              borderRadius="4xs"
              variant="light"
            ></wui-shimmer>
            <wui-shimmer
              width="46px"
              height="14px"
              borderRadius="4xs"
              variant="light"
            ></wui-shimmer>
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}};at.styles=[rt],at=it([l(`w3m-pay-options-skeleton`)],at);var ot=p`
  :host {
    display: block;
    width: 100%;
  }

  .pay-options-container {
    max-height: 196px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
    mask-image: var(--options-mask-image);
    -webkit-mask-image: var(--options-mask-image);
  }

  .pay-options-container::-webkit-scrollbar {
    display: none;
  }

  .pay-option-container {
    cursor: pointer;
    border-radius: ${({borderRadius:e})=>e[4]};
    padding: ${({spacing:e})=>e[3]};
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e[`ease-out-power-1`]};
    will-change: background-color;
  }

  .token-images-container {
    position: relative;
    justify-content: center;
    align-items: center;
  }

  .token-image {
    border-radius: ${({borderRadius:e})=>e.round};
    width: 32px;
    height: 32px;
  }

  .chain-image {
    position: absolute;
    width: 16px;
    height: 16px;
    bottom: -3px;
    right: -5px;
    border-radius: ${({borderRadius:e})=>e.round};
    border: 2px solid ${({tokens:e})=>e.theme.backgroundPrimary};
  }

  @media (hover: hover) and (pointer: fine) {
    .pay-option-container:hover {
      background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    }
  }
`,Y=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},st=300,X=class extends f{constructor(){super(),this.unsubscribe=[],this.options=[],this.selectedPaymentAsset=null}disconnectedCallback(){var e;this.unsubscribe.forEach(e=>e()),(e=this.resizeObserver)==null||e.disconnect(),(this.shadowRoot?.querySelector(`.pay-options-container`))?.removeEventListener(`scroll`,this.handleOptionsListScroll.bind(this))}firstUpdated(){var e;let t=this.shadowRoot?.querySelector(`.pay-options-container`);t&&(requestAnimationFrame(this.handleOptionsListScroll.bind(this)),t?.addEventListener(`scroll`,this.handleOptionsListScroll.bind(this)),this.resizeObserver=new ResizeObserver(()=>{this.handleOptionsListScroll()}),(e=this.resizeObserver)==null||e.observe(t),this.handleOptionsListScroll())}render(){return y`
      <wui-flex flexDirection="column" gap="2" class="pay-options-container">
        ${this.options.map(e=>this.payOptionTemplate(e))}
      </wui-flex>
    `}payOptionTemplate(e){let{network:t,metadata:n,asset:r,amount:i=`0`}=e,a=h.getAllRequestedCaipNetworks().find(e=>e.caipNetworkId===t),o=`${t}:${r}`==`${this.selectedPaymentAsset?.network}:${this.selectedPaymentAsset?.asset}`,s=d.bigNumber(i,{safe:!0}),l=s.gt(0);return y`
      <wui-flex
        alignItems="center"
        justifyContent="space-between"
        gap="2"
        @click=${()=>this.onSelect?.call(this,e)}
        class="pay-option-container"
      >
        <wui-flex alignItems="center" gap="2">
          <wui-flex class="token-images-container">
            <wui-image
              src=${_(n.logoURI)}
              class="token-image"
              size="3xl"
            ></wui-image>
            <wui-image
              src=${_(c.getNetworkImage(a))}
              class="chain-image"
              size="md"
            ></wui-image>
          </wui-flex>

          <wui-flex flexDirection="column" gap="1">
            <wui-text variant="lg-regular" color="primary">${n.symbol}</wui-text>
            ${l?y`<wui-text variant="sm-regular" color="secondary">
                  ${s.round(6).toString()} ${n.symbol}
                </wui-text>`:null}
          </wui-flex>
        </wui-flex>

        ${o?y`<wui-icon name="checkmark" size="md" color="success"></wui-icon>`:null}
      </wui-flex>
    `}handleOptionsListScroll(){let e=this.shadowRoot?.querySelector(`.pay-options-container`);e&&(e.scrollHeight>st?(e.style.setProperty(`--options-mask-image`,`linear-gradient(
          to bottom,
          rgba(0, 0, 0, calc(1 - var(--options-scroll--top-opacity))) 0px,
          rgba(200, 200, 200, calc(1 - var(--options-scroll--top-opacity))) 1px,
          black 50px,
          black calc(100% - 50px),
          rgba(155, 155, 155, calc(1 - var(--options-scroll--bottom-opacity))) calc(100% - 1px),
          rgba(0, 0, 0, calc(1 - var(--options-scroll--bottom-opacity))) 100%
        )`),e.style.setProperty(`--options-scroll--top-opacity`,de.interpolate([0,50],[0,1],e.scrollTop).toString()),e.style.setProperty(`--options-scroll--bottom-opacity`,de.interpolate([0,50],[0,1],e.scrollHeight-e.scrollTop-e.offsetHeight).toString())):(e.style.setProperty(`--options-mask-image`,`none`),e.style.setProperty(`--options-scroll--top-opacity`,`0`),e.style.setProperty(`--options-scroll--bottom-opacity`,`0`)))}};X.styles=[ot],Y([x({type:Array})],X.prototype,`options`,void 0),Y([x()],X.prototype,`selectedPaymentAsset`,void 0),Y([x()],X.prototype,`onSelect`,void 0),X=Y([l(`w3m-pay-options`)],X);var ct=p`
  .payment-methods-container {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-top-right-radius: ${({borderRadius:e})=>e[5]};
    border-top-left-radius: ${({borderRadius:e})=>e[5]};
  }

  .pay-options-container {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    border-radius: ${({borderRadius:e})=>e[5]};
    padding: ${({spacing:e})=>e[1]};
  }

  w3m-tooltip-trigger {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: fit-content;
  }

  wui-image {
    border-radius: ${({borderRadius:e})=>e.round};
  }

  w3m-pay-options.disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`,Z=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Q={eip155:`ethereum`,solana:`solana`,bip122:`bitcoin`,ton:`ton`},lt={eip155:{icon:Q.eip155,label:`EVM`},solana:{icon:Q.solana,label:`Solana`},bip122:{icon:Q.bip122,label:`Bitcoin`},ton:{icon:Q.ton,label:`Ton`}},$=class extends f{constructor(){super(),this.unsubscribe=[],this.profileName=null,this.paymentAsset=z.state.paymentAsset,this.namespace=void 0,this.caipAddress=void 0,this.amount=z.state.amount,this.recipient=z.state.recipient,this.activeConnectorIds=i.state.activeConnectorIds,this.selectedPaymentAsset=z.state.selectedPaymentAsset,this.selectedExchange=z.state.selectedExchange,this.isFetchingQuote=z.state.isFetchingQuote,this.quoteError=z.state.quoteError,this.quote=z.state.quote,this.isFetchingTokenBalances=z.state.isFetchingTokenBalances,this.tokenBalances=z.state.tokenBalances,this.isPaymentInProgress=z.state.isPaymentInProgress,this.exchangeUrlForQuote=z.state.exchangeUrlForQuote,this.completedTransactionsCount=0,this.unsubscribe.push(z.subscribeKey(`paymentAsset`,e=>this.paymentAsset=e)),this.unsubscribe.push(z.subscribeKey(`tokenBalances`,e=>this.onTokenBalancesChanged(e))),this.unsubscribe.push(z.subscribeKey(`isFetchingTokenBalances`,e=>this.isFetchingTokenBalances=e)),this.unsubscribe.push(i.subscribeKey(`activeConnectorIds`,e=>this.activeConnectorIds=e)),this.unsubscribe.push(z.subscribeKey(`selectedPaymentAsset`,e=>this.selectedPaymentAsset=e)),this.unsubscribe.push(z.subscribeKey(`isFetchingQuote`,e=>this.isFetchingQuote=e)),this.unsubscribe.push(z.subscribeKey(`quoteError`,e=>this.quoteError=e)),this.unsubscribe.push(z.subscribeKey(`quote`,e=>this.quote=e)),this.unsubscribe.push(z.subscribeKey(`amount`,e=>this.amount=e)),this.unsubscribe.push(z.subscribeKey(`recipient`,e=>this.recipient=e)),this.unsubscribe.push(z.subscribeKey(`isPaymentInProgress`,e=>this.isPaymentInProgress=e)),this.unsubscribe.push(z.subscribeKey(`selectedExchange`,e=>this.selectedExchange=e)),this.unsubscribe.push(z.subscribeKey(`exchangeUrlForQuote`,e=>this.exchangeUrlForQuote=e)),this.resetQuoteState(),this.initializeNamespace(),this.fetchTokens()}disconnectedCallback(){super.disconnectedCallback(),this.resetAssetsState(),this.unsubscribe.forEach(e=>e())}updated(e){super.updated(e),e.has(`selectedPaymentAsset`)&&this.fetchQuote()}render(){return y`
      <wui-flex flexDirection="column">
        ${this.profileTemplate()}

        <wui-flex
          flexDirection="column"
          gap="4"
          class="payment-methods-container"
          .padding=${[`4`,`4`,`5`,`4`]}
        >
          ${this.paymentOptionsViewTemplate()} ${this.amountWithFeeTemplate()}

          <wui-flex
            alignItems="center"
            justifyContent="space-between"
            .padding=${[`1`,`0`,`1`,`0`]}
          >
            <wui-separator></wui-separator>
          </wui-flex>

          ${this.paymentActionsTemplate()}
        </wui-flex>
      </wui-flex>
    `}profileTemplate(){if(this.selectedExchange){let e=d.formatNumber(this.quote?.origin.amount,{decimals:this.quote?.origin.currency.metadata.decimals??0}).toString();return y`
        <wui-flex
          .padding=${[`4`,`3`,`4`,`3`]}
          alignItems="center"
          justifyContent="space-between"
          gap="2"
        >
          <wui-text variant="lg-regular" color="secondary">Paying with</wui-text>

          ${this.quote?y`<wui-text variant="lg-regular" color="primary">
                ${d.bigNumber(e,{safe:!0}).round(6).toString()}
                ${this.quote.origin.currency.metadata.symbol}
              </wui-text>`:y`<wui-shimmer width="80px" height="18px" variant="light"></wui-shimmer>`}
        </wui-flex>
      `}let e=t.getPlainAddress(this.caipAddress)??``,{name:n,image:r}=this.getWalletProperties({namespace:this.namespace}),{icon:i,label:a}=lt[this.namespace]??{};return y`
      <wui-flex
        .padding=${[`4`,`3`,`4`,`3`]}
        alignItems="center"
        justifyContent="space-between"
        gap="2"
      >
        <wui-wallet-switch
          profileName=${_(this.profileName)}
          address=${_(e)}
          imageSrc=${_(r)}
          alt=${_(n)}
          @click=${this.onConnectOtherWallet.bind(this)}
          data-testid="wui-wallet-switch"
        ></wui-wallet-switch>

        <wui-wallet-switch
          profileName=${_(a)}
          address=${_(e)}
          icon=${_(i)}
          iconSize="xs"
          .enableGreenCircle=${!1}
          alt=${_(a)}
          @click=${this.onConnectOtherWallet.bind(this)}
          data-testid="wui-wallet-switch"
        ></wui-wallet-switch>
      </wui-flex>
    `}initializeNamespace(){let e=h.state.activeChain;this.namespace=e,this.caipAddress=h.getAccountData(e)?.caipAddress,this.profileName=h.getAccountData(e)?.profileName??null,this.unsubscribe.push(h.subscribeChainProp(`accountState`,e=>this.onAccountStateChanged(e),e))}async fetchTokens(){if(this.namespace){let e;if(this.caipAddress){let{chainId:t,chainNamespace:n}=m.parseCaipAddress(this.caipAddress),r=`${n}:${t}`;e=h.getAllRequestedCaipNetworks().find(e=>e.caipNetworkId===r)}await z.fetchTokens({caipAddress:this.caipAddress,caipNetwork:e,namespace:this.namespace})}}fetchQuote(){if(this.amount&&this.recipient&&this.selectedPaymentAsset&&this.paymentAsset){let{address:e}=this.caipAddress?m.parseCaipAddress(this.caipAddress):{};z.fetchQuote({amount:this.amount.toString(),address:e,sourceToken:this.selectedPaymentAsset,toToken:this.paymentAsset,recipient:this.recipient})}}getWalletProperties({namespace:e}){if(!e)return{name:void 0,image:void 0};let t=this.activeConnectorIds[e];if(!t)return{name:void 0,image:void 0};let n=i.getConnector({id:t,namespace:e});if(!n)return{name:void 0,image:void 0};let r=c.getConnectorImage(n);return{name:n.name,image:r}}paymentOptionsViewTemplate(){return y`
      <wui-flex flexDirection="column" gap="2">
        <wui-text variant="sm-regular" color="secondary">CHOOSE PAYMENT OPTION</wui-text>
        <wui-flex class="pay-options-container">${this.paymentOptionsTemplate()}</wui-flex>
      </wui-flex>
    `}paymentOptionsTemplate(){let e=this.getPaymentAssetFromTokenBalances();return this.isFetchingTokenBalances?y`<w3m-pay-options-skeleton></w3m-pay-options-skeleton>`:e.length===0?y`<w3m-pay-options-empty
        @connectOtherWallet=${this.onConnectOtherWallet.bind(this)}
      ></w3m-pay-options-empty>`:y`<w3m-pay-options
      class=${ne({disabled:this.isFetchingQuote})}
      .options=${e}
      .selectedPaymentAsset=${_(this.selectedPaymentAsset)}
      .onSelect=${this.onSelectedPaymentAssetChanged.bind(this)}
    ></w3m-pay-options>`}amountWithFeeTemplate(){return this.isFetchingQuote||!this.selectedPaymentAsset||this.quoteError?y`<w3m-pay-fees-skeleton></w3m-pay-fees-skeleton>`:y`<w3m-pay-fees></w3m-pay-fees>`}paymentActionsTemplate(){let e=this.isFetchingQuote||this.isFetchingTokenBalances,t=this.isFetchingQuote||this.isFetchingTokenBalances||!this.selectedPaymentAsset||!!this.quoteError,n=d.formatNumber(this.quote?.origin.amount??0,{decimals:this.quote?.origin.currency.metadata.decimals??0}).toString();return this.selectedExchange?e||t?y`
          <wui-shimmer width="100%" height="48px" variant="light" ?rounded=${!0}></wui-shimmer>
        `:y`<wui-button
        size="lg"
        fullWidth
        variant="accent-secondary"
        @click=${this.onPayWithExchange.bind(this)}
      >
        ${`Continue in ${this.selectedExchange.name}`}

        <wui-icon name="arrowRight" color="inherit" size="sm" slot="iconRight"></wui-icon>
      </wui-button>`:y`
      <wui-flex alignItems="center" justifyContent="space-between">
        <wui-flex flexDirection="column" gap="1">
          <wui-text variant="md-regular" color="secondary">Order Total</wui-text>

          ${e||t?y`<wui-shimmer width="58px" height="32px" variant="light"></wui-shimmer>`:y`<wui-flex alignItems="center" gap="01">
                <wui-text variant="h4-regular" color="primary">${F(n)}</wui-text>

                <wui-text variant="lg-regular" color="secondary">
                  ${this.quote?.origin.currency.metadata.symbol||`Unknown`}
                </wui-text>
              </wui-flex>`}
        </wui-flex>

        ${this.actionButtonTemplate({isLoading:e,isDisabled:t})}
      </wui-flex>
    `}actionButtonTemplate(e){let t=A(this.quote),{isLoading:n,isDisabled:r}=e,i=`Pay`;return t.length>1&&this.completedTransactionsCount===0&&(i=`Approve`),y`
      <wui-button
        size="lg"
        variant="accent-primary"
        ?loading=${n||this.isPaymentInProgress}
        ?disabled=${r||this.isPaymentInProgress}
        @click=${()=>{t.length>0?this.onSendTransactions():this.onTransfer()}}
      >
        ${i}
        ${n?null:y`<wui-icon
              name="arrowRight"
              color="inherit"
              size="sm"
              slot="iconRight"
            ></wui-icon>`}
      </wui-button>
    `}getPaymentAssetFromTokenBalances(){return this.namespace?(this.tokenBalances[this.namespace]??[]).map(e=>{try{return Ne(e)}catch{return null}}).filter(e=>!!e).filter(e=>{let{chainId:t}=m.parseCaipNetworkId(e.network),{chainId:n}=m.parseCaipNetworkId(this.paymentAsset.network);return o.isLowerCaseMatch(e.asset,this.paymentAsset.asset)?!0:this.selectedExchange?!o.isLowerCaseMatch(t.toString(),n.toString()):!0}):[]}onTokenBalancesChanged(e){this.tokenBalances=e;let[t]=this.getPaymentAssetFromTokenBalances();t&&z.setSelectedPaymentAsset(t)}async onConnectOtherWallet(){await i.connect(),await S.open({view:`PayQuote`})}onAccountStateChanged(e){let{address:t}=this.caipAddress?m.parseCaipAddress(this.caipAddress):{};if(this.caipAddress=e?.caipAddress,this.profileName=e?.profileName??null,t){let{address:e}=this.caipAddress?m.parseCaipAddress(this.caipAddress):{};e?o.isLowerCaseMatch(e,t)||(this.resetAssetsState(),this.resetQuoteState(),this.fetchTokens()):S.close()}}onSelectedPaymentAssetChanged(e){this.isFetchingQuote||z.setSelectedPaymentAsset(e)}async onTransfer(){let e=k(this.quote);if(e){if(!o.isLowerCaseMatch(this.selectedPaymentAsset?.asset,e.deposit.currency))throw Error(`Quote asset is not the same as the selected payment asset`);let t=this.selectedPaymentAsset?.amount??`0`,r=d.formatNumber(e.deposit.amount,{decimals:this.selectedPaymentAsset?.metadata.decimals??0}).toString();if(!d.bigNumber(t).gte(r)){v.showError(`Insufficient funds`);return}if(this.quote&&this.selectedPaymentAsset&&this.caipAddress&&this.namespace){let{address:t}=m.parseCaipAddress(this.caipAddress);await z.onTransfer({chainNamespace:this.namespace,fromAddress:t,toAddress:e.deposit.receiver,amount:r,paymentAsset:this.selectedPaymentAsset}),z.setRequestId(e.requestId),n.push(`PayLoading`)}}}async onSendTransactions(){let e=this.selectedPaymentAsset?.amount??`0`,t=d.formatNumber(this.quote?.origin.amount??0,{decimals:this.selectedPaymentAsset?.metadata.decimals??0}).toString();if(!d.bigNumber(e).gte(t)){v.showError(`Insufficient funds`);return}let r=A(this.quote),[i]=A(this.quote,this.completedTransactionsCount);i&&this.namespace&&(await z.onSendTransaction({namespace:this.namespace,transactionStep:i}),this.completedTransactionsCount+=1,this.completedTransactionsCount===r.length&&(z.setRequestId(i.requestId),n.push(`PayLoading`)))}onPayWithExchange(){if(this.exchangeUrlForQuote){let e=t.returnOpenHref(``,`popupWindow`,`scrollbar=yes,width=480,height=720`);if(!e)throw Error(`Could not create popup window`);e.location.href=this.exchangeUrlForQuote;let r=k(this.quote);r&&z.setRequestId(r.requestId),z.initiatePayment(),n.push(`PayLoading`)}}resetAssetsState(){z.setSelectedPaymentAsset(null)}resetQuoteState(){z.resetQuoteState()}};$.styles=ct,Z([b()],$.prototype,`profileName`,void 0),Z([b()],$.prototype,`paymentAsset`,void 0),Z([b()],$.prototype,`namespace`,void 0),Z([b()],$.prototype,`caipAddress`,void 0),Z([b()],$.prototype,`amount`,void 0),Z([b()],$.prototype,`recipient`,void 0),Z([b()],$.prototype,`activeConnectorIds`,void 0),Z([b()],$.prototype,`selectedPaymentAsset`,void 0),Z([b()],$.prototype,`selectedExchange`,void 0),Z([b()],$.prototype,`isFetchingQuote`,void 0),Z([b()],$.prototype,`quoteError`,void 0),Z([b()],$.prototype,`quote`,void 0),Z([b()],$.prototype,`isFetchingTokenBalances`,void 0),Z([b()],$.prototype,`tokenBalances`,void 0),Z([b()],$.prototype,`isPaymentInProgress`,void 0),Z([b()],$.prototype,`exchangeUrlForQuote`,void 0),Z([b()],$.prototype,`completedTransactionsCount`,void 0),$=Z([l(`w3m-pay-quote-view`)],$);export{z as a,O as i,E as n,$ as o,V as r,G as t};