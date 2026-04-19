import{An as e,Cn as t,Ei as n,Gn as r,Hn as i,Kn as a,Nt as o,Oi as s,Pn as c,Qr as l,Sn as u,Ui as ee,Vi as te,Vr as d,X as f,_n as ne,ai as p,an as re,dr as m,ei as h,et as g,fi as ie,gi as _,ia as v,ir as y,ji as ae,kn as b,lr as x,m as S,ma as oe,mt as se,or as ce,t as le,xn as ue,yi as C,zn as w}from"./index-BbGo_s0e.js";var de=f`
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
`,T=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},E=class extends x{constructor(){super(...arguments),this.icon=`card`,this.variant=`primary`,this.type=`accent`,this.size=`md`,this.iconSize=void 0,this.fullWidth=!1,this.disabled=!1}render(){return a`<button
      data-variant=${this.variant}
      data-type=${this.type}
      data-size=${this.size}
      data-full-width=${this.fullWidth}
      ?disabled=${this.disabled}
    >
      <wui-icon color="inherit" name=${this.icon} size=${y(this.iconSize)}></wui-icon>
    </button>`}};E.styles=[i,se,de],T([h()],E.prototype,`icon`,void 0),T([h()],E.prototype,`variant`,void 0),T([h()],E.prototype,`type`,void 0),T([h()],E.prototype,`size`,void 0),T([h()],E.prototype,`iconSize`,void 0),T([h({type:Boolean})],E.prototype,`fullWidth`,void 0),T([h({type:Boolean})],E.prototype,`disabled`,void 0),E=T([C(`wui-icon-button`)],E);var D={INVALID_PAYMENT_CONFIG:`INVALID_PAYMENT_CONFIG`,INVALID_RECIPIENT:`INVALID_RECIPIENT`,INVALID_ASSET:`INVALID_ASSET`,INVALID_AMOUNT:`INVALID_AMOUNT`,UNKNOWN_ERROR:`UNKNOWN_ERROR`,UNABLE_TO_INITIATE_PAYMENT:`UNABLE_TO_INITIATE_PAYMENT`,INVALID_CHAIN_NAMESPACE:`INVALID_CHAIN_NAMESPACE`,GENERIC_PAYMENT_ERROR:`GENERIC_PAYMENT_ERROR`,UNABLE_TO_GET_EXCHANGES:`UNABLE_TO_GET_EXCHANGES`,ASSET_NOT_SUPPORTED:`ASSET_NOT_SUPPORTED`,UNABLE_TO_GET_PAY_URL:`UNABLE_TO_GET_PAY_URL`,UNABLE_TO_GET_BUY_STATUS:`UNABLE_TO_GET_BUY_STATUS`,UNABLE_TO_GET_TOKEN_BALANCES:`UNABLE_TO_GET_TOKEN_BALANCES`,UNABLE_TO_GET_QUOTE:`UNABLE_TO_GET_QUOTE`,UNABLE_TO_GET_QUOTE_STATUS:`UNABLE_TO_GET_QUOTE_STATUS`,INVALID_RECIPIENT_ADDRESS_FOR_ASSET:`INVALID_RECIPIENT_ADDRESS_FOR_ASSET`},O={[D.INVALID_PAYMENT_CONFIG]:`Invalid payment configuration`,[D.INVALID_RECIPIENT]:`Invalid recipient address`,[D.INVALID_ASSET]:`Invalid asset specified`,[D.INVALID_AMOUNT]:`Invalid payment amount`,[D.INVALID_RECIPIENT_ADDRESS_FOR_ASSET]:`Invalid recipient address for the asset selected`,[D.UNKNOWN_ERROR]:`Unknown payment error occurred`,[D.UNABLE_TO_INITIATE_PAYMENT]:`Unable to initiate payment`,[D.INVALID_CHAIN_NAMESPACE]:`Invalid chain namespace`,[D.GENERIC_PAYMENT_ERROR]:`Unable to process payment`,[D.UNABLE_TO_GET_EXCHANGES]:`Unable to get exchanges`,[D.ASSET_NOT_SUPPORTED]:`Asset not supported by the selected exchange`,[D.UNABLE_TO_GET_PAY_URL]:`Unable to get payment URL`,[D.UNABLE_TO_GET_BUY_STATUS]:`Unable to get buy status`,[D.UNABLE_TO_GET_TOKEN_BALANCES]:`Unable to get token balances`,[D.UNABLE_TO_GET_QUOTE]:`Unable to get quote. Please choose a different token`,[D.UNABLE_TO_GET_QUOTE_STATUS]:`Unable to get quote status`},k=class e extends Error{get message(){return O[this.code]}constructor(t,n){super(O[t]),this.name=`AppKitPayError`,this.code=t,this.details=n,Error.captureStackTrace&&Error.captureStackTrace(this,e)}},fe=`https://rpc.walletconnect.org/v1/json-rpc`,pe=`reown_test`;function me(){let{chainNamespace:e}=n.parseCaipNetworkId(B.state.paymentAsset.network);if(!b.isAddress(B.state.recipient,e))throw new k(D.INVALID_RECIPIENT_ADDRESS_FOR_ASSET,`Provide valid recipient address for namespace "${e}"`)}async function he(e,n,r){if(n!==t.CHAIN.EVM)throw new k(D.INVALID_CHAIN_NAMESPACE);if(!r.fromAddress)throw new k(D.INVALID_PAYMENT_CONFIG,`fromAddress is required for native EVM payments.`);let i=typeof r.amount==`string`?parseFloat(r.amount):r.amount;if(isNaN(i))throw new k(D.INVALID_PAYMENT_CONFIG);let a=e.metadata?.decimals??18,o=_.parseUnits(i.toString(),a);if(typeof o!=`bigint`)throw new k(D.GENERIC_PAYMENT_ERROR);return await _.sendTransaction({chainNamespace:n,to:r.recipient,address:r.fromAddress,value:o,data:`0x`})??void 0}async function ge(e,n){if(!n.fromAddress)throw new k(D.INVALID_PAYMENT_CONFIG,`fromAddress is required for ERC20 EVM payments.`);let r=e.asset,i=n.recipient,a=Number(e.metadata.decimals),o=_.parseUnits(n.amount.toString(),a);if(o===void 0)throw new k(D.GENERIC_PAYMENT_ERROR);return await _.writeContract({fromAddress:n.fromAddress,tokenAddress:r,args:[i,o],method:`transfer`,abi:ee.getERC20Abi(r),chainNamespace:t.CHAIN.EVM})??void 0}async function _e(e,n){if(e!==t.CHAIN.SOLANA)throw new k(D.INVALID_CHAIN_NAMESPACE);if(!n.fromAddress)throw new k(D.INVALID_PAYMENT_CONFIG,`fromAddress is required for Solana payments.`);let r=typeof n.amount==`string`?parseFloat(n.amount):n.amount;if(isNaN(r)||r<=0)throw new k(D.INVALID_PAYMENT_CONFIG,`Invalid payment amount.`);try{if(!ie.getProvider(e))throw new k(D.GENERIC_PAYMENT_ERROR,`No Solana provider available.`);let i=await _.sendTransaction({chainNamespace:t.CHAIN.SOLANA,to:n.recipient,value:r,tokenMint:n.tokenMint});if(!i)throw new k(D.GENERIC_PAYMENT_ERROR,`Transaction failed.`);return i}catch(e){throw e instanceof k?e:new k(D.GENERIC_PAYMENT_ERROR,`Solana payment failed: ${e}`)}}async function ve({sourceToken:e,toToken:t,amount:n,recipient:r}){let i=_.parseUnits(n,e.metadata.decimals),a=_.parseUnits(n,t.metadata.decimals);return Promise.resolve({type:R,origin:{amount:i?.toString()??`0`,currency:e},destination:{amount:a?.toString()??`0`,currency:t},fees:[{id:`service`,label:`Service Fee`,amount:`0`,currency:t}],steps:[{requestId:R,type:`deposit`,deposit:{amount:i?.toString()??`0`,currency:e.asset,receiver:r}}],timeInSeconds:6})}function A(e){if(!e)return null;let t=e.steps[0];return!t||t.type!==Ie?null:t}function j(e,t=0){if(!e)return[];let n=e.steps.filter(e=>e.type===Le),r=n.filter((e,n)=>n+1>t);return n.length>0&&n.length<3?r:[]}var M=new le({baseUrl:b.getApiUrl(),clientId:null}),ye=class extends Error{};function be(){return`${fe}?projectId=${ne.getSnapshot().projectId}`}function N(){let{projectId:e,sdkType:t,sdkVersion:n}=ne.state;return{projectId:e,st:t||`appkit`,sv:n||`html-wagmi-4.2.2`}}async function P(e,t){let n=be(),{sdkType:r,sdkVersion:i,projectId:a}=ne.getSnapshot(),o={jsonrpc:`2.0`,id:1,method:e,params:{...t||{},st:r,sv:i,projectId:a}},s=await(await fetch(n,{method:`POST`,body:JSON.stringify(o),headers:{"Content-Type":`application/json`}})).json();if(s.error)throw new ye(s.error.message);return s}async function xe(e){return(await P(`reown_getExchanges`,e)).result}async function Se(e){return(await P(`reown_getExchangePayUrl`,e)).result}async function Ce(e){return(await P(`reown_getExchangeBuyStatus`,e)).result}async function we(e){let t=p.bigNumber(e.amount).times(10**e.toToken.metadata.decimals).toString(),{chainId:r,chainNamespace:i}=n.parseCaipNetworkId(e.sourceToken.network),{chainId:a,chainNamespace:o}=n.parseCaipNetworkId(e.toToken.network),s=e.sourceToken.asset===`native`?u(i):e.sourceToken.asset,c=e.toToken.asset===`native`?u(o):e.toToken.asset;return await M.post({path:`/appkit/v1/transfers/quote`,body:{user:e.address,originChainId:r.toString(),originCurrency:s,destinationChainId:a.toString(),destinationCurrency:c,recipient:e.recipient,amount:t},params:N()})}async function Te(e){let t=d.isLowerCaseMatch(e.sourceToken.network,e.toToken.network),n=d.isLowerCaseMatch(e.sourceToken.asset,e.toToken.asset);return t&&n?ve(e):we(e)}async function Ee(e){return await M.get({path:`/appkit/v1/transfers/status`,params:{requestId:e.requestId,...N()}})}async function De(e){return await M.get({path:`/appkit/v1/transfers/assets/exchanges/${e}`,params:N()})}var Oe=[`eip155`,`solana`],ke={eip155:{native:{assetNamespace:`slip44`,assetReference:`60`},defaultTokenNamespace:`erc20`},solana:{native:{assetNamespace:`slip44`,assetReference:`501`},defaultTokenNamespace:`token`}},Ae={56:`714`,204:`714`};function F(e,t){let{chainNamespace:r,chainId:i}=n.parseCaipNetworkId(e),a=ke[r];if(!a)throw Error(`Unsupported chain namespace for CAIP-19 formatting: ${r}`);let o=a.native.assetNamespace,s=a.native.assetReference;return t===`native`?r===`eip155`&&Ae[i]&&(s=Ae[i]):(o=a.defaultTokenNamespace,s=t),`${`${r}:${i}`}/${o}:${s}`}function je(e){let{chainNamespace:t}=n.parseCaipNetworkId(e);return Oe.includes(t)}function Me(e){let t=S.getAllRequestedCaipNetworks().find(t=>t.caipNetworkId===e.chainId),r=e.address;if(!t)throw Error(`Target network not found for balance chainId "${e.chainId}"`);if(d.isLowerCaseMatch(e.symbol,t.nativeCurrency.symbol))r=`native`;else if(b.isCaipAddress(r)){let{address:e}=n.parseCaipAddress(r);r=e}else if(!r)throw Error(`Balance address not found for balance symbol "${e.symbol}"`);return{network:t.caipNetworkId,asset:r,metadata:{name:e.name,symbol:e.symbol,decimals:Number(e.quantity.decimals),logoURI:e.iconUrl},amount:e.quantity.numeric}}function Ne(e){return{chainId:e.network,address:`${e.network}:${e.asset}`,symbol:e.metadata.symbol,name:e.metadata.name,iconUrl:e.metadata.logoURI||``,price:0,quantity:{numeric:`0`,decimals:e.metadata.decimals.toString()}}}function I(e){let t=p.bigNumber(e,{safe:!0});return t.lt(.001)?`<0.001`:t.round(4).toString()}function Pe(e){let t=S.getAllRequestedCaipNetworks().find(t=>t.caipNetworkId===e.network);return t?!!t.testnet:!1}var Fe=0,L=`unknown`,R=`direct-transfer`,Ie=`deposit`,Le=`transaction`,z=l({paymentAsset:{network:`eip155:1`,asset:`0x0`,metadata:{name:`0x0`,symbol:`0x0`,decimals:0}},recipient:`0x0`,amount:0,isConfigured:!1,error:null,isPaymentInProgress:!1,exchanges:[],isLoading:!1,openInNewTab:!0,redirectUrl:void 0,payWithExchange:void 0,currentPayment:void 0,analyticsSet:!1,paymentId:void 0,choice:`pay`,tokenBalances:{[t.CHAIN.EVM]:[],[t.CHAIN.SOLANA]:[]},isFetchingTokenBalances:!1,selectedPaymentAsset:null,quote:void 0,quoteStatus:`waiting`,quoteError:null,isFetchingQuote:!1,selectedExchange:void 0,exchangeUrlForQuote:void 0,requestId:void 0}),B={state:z,subscribe(e){return ce(z,()=>e(z))},subscribeKey(e,t){return re(z,e,t)},async handleOpenPay(e){this.resetState(),this.setPaymentConfig(e),this.initializeAnalytics(),me(),await this.prepareTokenLogo(),z.isConfigured=!0,v.sendEvent({type:`track`,event:`PAY_MODAL_OPEN`,properties:{exchanges:z.exchanges,configuration:{network:z.paymentAsset.network,asset:z.paymentAsset.asset,recipient:z.recipient,amount:z.amount}}}),await s.open({view:`Pay`})},resetState(){z.paymentAsset={network:`eip155:1`,asset:`0x0`,metadata:{name:`0x0`,symbol:`0x0`,decimals:0}},z.recipient=`0x0`,z.amount=0,z.isConfigured=!1,z.error=null,z.isPaymentInProgress=!1,z.isLoading=!1,z.currentPayment=void 0,z.selectedExchange=void 0,z.exchangeUrlForQuote=void 0,z.requestId=void 0},resetQuoteState(){z.quote=void 0,z.quoteStatus=`waiting`,z.quoteError=null,z.isFetchingQuote=!1,z.requestId=void 0},setPaymentConfig(e){if(!e.paymentAsset)throw new k(D.INVALID_PAYMENT_CONFIG);try{z.choice=e.choice??`pay`,z.paymentAsset=e.paymentAsset,z.recipient=e.recipient,z.amount=e.amount,z.openInNewTab=e.openInNewTab??!0,z.redirectUrl=e.redirectUrl,z.payWithExchange=e.payWithExchange,z.error=null}catch(e){throw new k(D.INVALID_PAYMENT_CONFIG,e.message)}},setSelectedPaymentAsset(e){z.selectedPaymentAsset=e},setSelectedExchange(e){z.selectedExchange=e},setRequestId(e){z.requestId=e},setPaymentInProgress(e){z.isPaymentInProgress=e},getPaymentAsset(){return z.paymentAsset},getExchanges(){return z.exchanges},async fetchExchanges(){try{z.isLoading=!0,z.exchanges=(await xe({page:Fe})).exchanges.slice(0,2)}catch{throw m.showError(O.UNABLE_TO_GET_EXCHANGES),new k(D.UNABLE_TO_GET_EXCHANGES)}finally{z.isLoading=!1}},async getAvailableExchanges(e){try{let t=e!=null&&e.asset&&e!=null&&e.network?F(e.network,e.asset):void 0;return await xe({page:e?.page??Fe,asset:t,amount:(e?.amount)?.toString()})}catch{throw new k(D.UNABLE_TO_GET_EXCHANGES)}},async getPayUrl(e,t,n=!1){try{let r=Number(t.amount),i=await Se({exchangeId:e,asset:F(t.network,t.asset),amount:r.toString(),recipient:`${t.network}:${t.recipient}`});return v.sendEvent({type:`track`,event:`PAY_EXCHANGE_SELECTED`,properties:{source:`pay`,exchange:{id:e},configuration:{network:t.network,asset:t.asset,recipient:t.recipient,amount:r},currentPayment:{type:`exchange`,exchangeId:e},headless:n}}),n&&(this.initiatePayment(),v.sendEvent({type:`track`,event:`PAY_INITIATED`,properties:{source:`pay`,paymentId:z.paymentId||L,configuration:{network:t.network,asset:t.asset,recipient:t.recipient,amount:r},currentPayment:{type:`exchange`,exchangeId:e}}})),i}catch(e){throw e instanceof Error&&e.message.includes(`is not supported`)?new k(D.ASSET_NOT_SUPPORTED):Error(e.message)}},async generateExchangeUrlForQuote({exchangeId:e,paymentAsset:t,amount:n,recipient:r}){let i=await Se({exchangeId:e,asset:F(t.network,t.asset),amount:n.toString(),recipient:r});z.exchangeSessionId=i.sessionId,z.exchangeUrlForQuote=i.url},async openPayUrl(e,t,n=!1){try{let r=await this.getPayUrl(e.exchangeId,t,n);if(!r)throw new k(D.UNABLE_TO_GET_PAY_URL);let i=e.openInNewTab??!0?`_blank`:`_self`;return b.openHref(r.url,i),r}catch(e){throw e instanceof k?z.error=e.message:z.error=O.GENERIC_PAYMENT_ERROR,new k(D.UNABLE_TO_GET_PAY_URL)}},async onTransfer({chainNamespace:e,fromAddress:n,toAddress:r,amount:i,paymentAsset:a}){if(z.currentPayment={type:`wallet`,status:`IN_PROGRESS`},!z.isPaymentInProgress)try{this.initiatePayment();let o=S.getAllRequestedCaipNetworks().find(e=>e.caipNetworkId===a.network);if(!o)throw Error(`Target network not found`);let s=S.state.activeCaipNetwork;switch(d.isLowerCaseMatch(s?.caipNetworkId,o.caipNetworkId)||await S.switchActiveNetwork(o),e){case t.CHAIN.EVM:a.asset===`native`&&(z.currentPayment.result=await he(a,e,{recipient:r,amount:i,fromAddress:n})),a.asset.startsWith(`0x`)&&(z.currentPayment.result=await ge(a,{recipient:r,amount:i,fromAddress:n})),z.currentPayment.status=`SUCCESS`;break;case t.CHAIN.SOLANA:z.currentPayment.result=await _e(e,{recipient:r,amount:i,fromAddress:n,tokenMint:a.asset===`native`?void 0:a.asset}),z.currentPayment.status=`SUCCESS`;break;default:throw new k(D.INVALID_CHAIN_NAMESPACE)}}catch(e){throw e instanceof k?z.error=e.message:z.error=O.GENERIC_PAYMENT_ERROR,z.currentPayment.status=`FAILED`,m.showError(z.error),e}finally{z.isPaymentInProgress=!1}},async onSendTransaction(e){try{let{namespace:n,transactionStep:r}=e;B.initiatePayment();let i=S.getAllRequestedCaipNetworks().find(e=>e.caipNetworkId===z.paymentAsset?.network);if(!i)throw Error(`Target network not found`);let a=S.state.activeCaipNetwork;if(d.isLowerCaseMatch(a?.caipNetworkId,i.caipNetworkId)||await S.switchActiveNetwork(i),n===t.CHAIN.EVM){let{from:e,to:t,data:i,value:a}=r.transaction;await _.sendTransaction({address:e,to:t,data:i,value:BigInt(a),chainNamespace:n})}else if(n===t.CHAIN.SOLANA){let{instructions:e}=r.transaction;await _.writeSolanaTransaction({instructions:e})}}catch(e){throw e instanceof k?z.error=e.message:z.error=O.GENERIC_PAYMENT_ERROR,m.showError(z.error),e}finally{z.isPaymentInProgress=!1}},getExchangeById(e){return z.exchanges.find(t=>t.id===e)},validatePayConfig(e){let{paymentAsset:t,recipient:n,amount:r}=e;if(!t)throw new k(D.INVALID_PAYMENT_CONFIG);if(!n)throw new k(D.INVALID_RECIPIENT);if(!t.asset)throw new k(D.INVALID_ASSET);if(r==null||r<=0)throw new k(D.INVALID_AMOUNT)},async handlePayWithExchange(e){try{z.currentPayment={type:`exchange`,exchangeId:e};let{network:t,asset:n}=z.paymentAsset,r={network:t,asset:n,amount:z.amount,recipient:z.recipient},i=await this.getPayUrl(e,r);if(!i)throw new k(D.UNABLE_TO_INITIATE_PAYMENT);return z.currentPayment.sessionId=i.sessionId,z.currentPayment.status=`IN_PROGRESS`,z.currentPayment.exchangeId=e,this.initiatePayment(),{url:i.url,openInNewTab:z.openInNewTab}}catch(e){return e instanceof k?z.error=e.message:z.error=O.GENERIC_PAYMENT_ERROR,z.isPaymentInProgress=!1,m.showError(z.error),null}},async getBuyStatus(e,t){try{let n=await Ce({sessionId:t,exchangeId:e});return(n.status===`SUCCESS`||n.status===`FAILED`)&&v.sendEvent({type:`track`,event:n.status===`SUCCESS`?`PAY_SUCCESS`:`PAY_ERROR`,properties:{message:n.status===`FAILED`?b.parseError(z.error):void 0,source:`pay`,paymentId:z.paymentId||L,configuration:{network:z.paymentAsset.network,asset:z.paymentAsset.asset,recipient:z.recipient,amount:z.amount},currentPayment:{type:`exchange`,exchangeId:z.currentPayment?.exchangeId,sessionId:z.currentPayment?.sessionId,result:n.txHash}}}),n}catch{throw new k(D.UNABLE_TO_GET_BUY_STATUS)}},async fetchTokensFromEOA({caipAddress:e,caipNetwork:r,namespace:i}){if(!e)return[];let{address:a}=n.parseCaipAddress(e),o=r;return i===t.CHAIN.EVM&&(o=void 0),await ae.getMyTokensWithBalance({address:a,caipNetwork:o})},async fetchTokensFromExchange(){if(!z.selectedExchange)return[];let e=await De(z.selectedExchange.id),t=Object.values(e.assets).flat();return await Promise.all(t.map(async e=>{let t=Ne(e),{chainNamespace:r}=n.parseCaipNetworkId(t.chainId),i=t.address;if(b.isCaipAddress(i)){let{address:e}=n.parseCaipAddress(i);i=e}return t.iconUrl=await o.getImageByToken(i??``,r).catch(()=>{})??``,t}))},async fetchTokens({caipAddress:e,caipNetwork:t,namespace:n}){try{z.isFetchingTokenBalances=!0;let r=await(z.selectedExchange?this.fetchTokensFromExchange():this.fetchTokensFromEOA({caipAddress:e,caipNetwork:t,namespace:n}));z.tokenBalances={...z.tokenBalances,[n]:r}}catch(e){let t=e instanceof Error?e.message:`Unable to get token balances`;m.showError(t)}finally{z.isFetchingTokenBalances=!1}},async fetchQuote({amount:e,address:t,sourceToken:n,toToken:r,recipient:i}){try{B.resetQuoteState(),z.isFetchingQuote=!0;let a=await Te({amount:e,address:z.selectedExchange?void 0:t,sourceToken:n,toToken:r,recipient:i});if(z.selectedExchange){let e=A(a);if(e){let t=`${n.network}:${e.deposit.receiver}`,r=p.formatNumber(e.deposit.amount,{decimals:n.metadata.decimals??0,round:8});await B.generateExchangeUrlForQuote({exchangeId:z.selectedExchange.id,paymentAsset:n,amount:r.toString(),recipient:t})}}z.quote=a}catch(e){let t=O.UNABLE_TO_GET_QUOTE;if(e instanceof Error&&e.cause&&e.cause instanceof Response)try{let n=await e.cause.json();n.error&&typeof n.error==`string`&&(t=n.error)}catch{}throw z.quoteError=t,m.showError(t),new k(D.UNABLE_TO_GET_QUOTE)}finally{z.isFetchingQuote=!1}},async fetchQuoteStatus({requestId:e}){try{if(e===R){let e=z.selectedExchange,t=z.exchangeSessionId;if(e&&t){switch((await this.getBuyStatus(e.id,t)).status){case`IN_PROGRESS`:z.quoteStatus=`waiting`;break;case`SUCCESS`:z.quoteStatus=`success`,z.isPaymentInProgress=!1;break;case`FAILED`:z.quoteStatus=`failure`,z.isPaymentInProgress=!1;break;case`UNKNOWN`:z.quoteStatus=`waiting`;break;default:z.quoteStatus=`waiting`;break}return}z.quoteStatus=`success`;return}let{status:t}=await Ee({requestId:e});z.quoteStatus=t}catch{throw z.quoteStatus=`failure`,new k(D.UNABLE_TO_GET_QUOTE_STATUS)}},initiatePayment(){z.isPaymentInProgress=!0,z.paymentId=crypto.randomUUID()},initializeAnalytics(){z.analyticsSet||(z.analyticsSet=!0,this.subscribeKey(`isPaymentInProgress`,e=>{var t;if((t=z.currentPayment)!=null&&t.status&&z.currentPayment.status!==`UNKNOWN`){let e={IN_PROGRESS:`PAY_INITIATED`,SUCCESS:`PAY_SUCCESS`,FAILED:`PAY_ERROR`}[z.currentPayment.status];v.sendEvent({type:`track`,event:e,properties:{message:z.currentPayment.status===`FAILED`?b.parseError(z.error):void 0,source:`pay`,paymentId:z.paymentId||L,configuration:{network:z.paymentAsset.network,asset:z.paymentAsset.asset,recipient:z.recipient,amount:z.amount},currentPayment:{type:z.currentPayment.type,exchangeId:z.currentPayment.exchangeId,sessionId:z.currentPayment.sessionId,result:z.currentPayment.result}}})}}))},async prepareTokenLogo(){if(!z.paymentAsset.metadata.logoURI)try{let{chainNamespace:e}=n.parseCaipNetworkId(z.paymentAsset.network),t=await o.getImageByToken(z.paymentAsset.asset,e);z.paymentAsset.metadata.logoURI=t}catch{}}},Re=f`
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
`,V=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},H=class extends x{constructor(){super(),this.unsubscribe=[],this.amount=B.state.amount,this.namespace=void 0,this.paymentAsset=B.state.paymentAsset,this.activeConnectorIds=c.state.activeConnectorIds,this.caipAddress=void 0,this.exchanges=B.state.exchanges,this.isLoading=B.state.isLoading,this.initializeNamespace(),this.unsubscribe.push(B.subscribeKey(`amount`,e=>this.amount=e)),this.unsubscribe.push(c.subscribeKey(`activeConnectorIds`,e=>this.activeConnectorIds=e)),this.unsubscribe.push(B.subscribeKey(`exchanges`,e=>this.exchanges=e)),this.unsubscribe.push(B.subscribeKey(`isLoading`,e=>this.isLoading=e)),B.fetchExchanges(),B.setSelectedExchange(void 0)}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return a`
      <wui-flex flexDirection="column">
        ${this.paymentDetailsTemplate()} ${this.paymentMethodsTemplate()}
      </wui-flex>
    `}paymentMethodsTemplate(){return a`
      <wui-flex flexDirection="column" padding="3" gap="2" class="payment-methods-container">
        ${this.payWithWalletTemplate()} ${this.templateSeparator()}
        ${this.templateExchangeOptions()}
      </wui-flex>
    `}initializeNamespace(){let e=S.state.activeChain;this.namespace=e,this.caipAddress=S.getAccountData(e)?.caipAddress,this.unsubscribe.push(S.subscribeChainProp(`accountState`,e=>{this.caipAddress=e?.caipAddress},e))}paymentDetailsTemplate(){let e=S.getAllRequestedCaipNetworks().find(e=>e.caipNetworkId===this.paymentAsset.network);return a`
      <wui-flex
        alignItems="center"
        justifyContent="space-between"
        .padding=${[`6`,`8`,`6`,`8`]}
        gap="2"
      >
        <wui-flex alignItems="center" gap="1">
          <wui-text variant="h1-regular" color="primary">
            ${I(this.amount||`0`)}
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
            src=${y(this.paymentAsset.metadata.logoURI)}
            class="token-image"
          ></wui-image>
          <wui-image
            src=${y(o.getNetworkImage(e))}
            class="chain-image"
          ></wui-image>
        </wui-flex>
      </wui-flex>
    `}payWithWalletTemplate(){return je(this.paymentAsset.network)?this.caipAddress?this.connectedWalletTemplate():this.disconnectedWalletTemplate():a``}connectedWalletTemplate(){let{name:e,image:t}=this.getWalletProperties({namespace:this.namespace});return a`
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
          imageSrc=${y(t)}
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
    `}disconnectedWalletTemplate(){return a`<wui-list-item
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
    </wui-list-item>`}templateExchangeOptions(){if(this.isLoading)return a`<wui-flex justifyContent="center" alignItems="center">
        <wui-loading-spinner size="md"></wui-loading-spinner>
      </wui-flex>`;let e=this.exchanges.filter(e=>Pe(this.paymentAsset)?e.id===pe:e.id!==pe);return e.length===0?a`<wui-flex justifyContent="center" alignItems="center">
        <wui-text variant="md-medium" color="primary">No exchanges available</wui-text>
      </wui-flex>`:e.map(e=>a`
        <wui-list-item
          type="secondary"
          boxColor="foregroundSecondary"
          @click=${()=>this.onExchangePayment(e)}
          data-testid="exchange-option-${e.id}"
          ?chevron=${!0}
          imageSrc=${y(e.imageUrl)}
        >
          <wui-text flexGrow="1" variant="lg-regular" color="primary">
            Pay with ${e.name}
          </wui-text>
        </wui-list-item>
      `)}templateSeparator(){return a`<wui-separator text="or" bgColor="secondary"></wui-separator>`}async onWalletPayment(){if(!this.namespace)throw Error(`Namespace not found`);this.caipAddress?w.push(`PayQuote`):(await c.connect(),await s.open({view:`PayQuote`}))}onExchangePayment(e){B.setSelectedExchange(e),w.push(`PayQuote`)}async onDisconnect(){try{await _.disconnect(),await s.open({view:`Pay`})}catch{console.error(`Failed to disconnect`),m.showError(`Failed to disconnect`)}}getWalletProperties({namespace:e}){if(!e)return{name:void 0,image:void 0};let t=this.activeConnectorIds[e];if(!t)return{name:void 0,image:void 0};let n=c.getConnector({id:t,namespace:e});if(!n)return{name:void 0,image:void 0};let r=o.getConnectorImage(n);return{name:n.name,image:r}}};H.styles=Re,V([g()],H.prototype,`amount`,void 0),V([g()],H.prototype,`namespace`,void 0),V([g()],H.prototype,`paymentAsset`,void 0),V([g()],H.prototype,`activeConnectorIds`,void 0),V([g()],H.prototype,`caipAddress`,void 0),V([g()],H.prototype,`exchanges`,void 0),V([g()],H.prototype,`isLoading`,void 0),H=V([C(`w3m-pay-view`)],H);var ze=f`
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
`,U=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Be=3,Ve=2,He=.3,Ue=`200px`,We={"accent-primary":te.tokens.core.backgroundAccentPrimary},W=class extends x{constructor(){super(...arguments),this.rings=Be,this.duration=Ve,this.opacity=He,this.size=Ue,this.variant=`accent-primary`}render(){let e=We[this.variant];return this.style.cssText=`
      --pulse-size: ${this.size};
      --pulse-duration: ${this.duration}s;
      --pulse-color: ${e};
      --pulse-opacity: ${this.opacity};
    `,a`
      <div class="pulse-container">
        <div class="pulse-rings">${Array.from({length:this.rings},(e,t)=>this.renderRing(t,this.rings))}</div>
        <div class="pulse-content">
          <slot></slot>
        </div>
      </div>
    `}renderRing(e,t){return a`<div class="pulse-ring" style=${`animation-delay: ${e/t*this.duration}s;`}></div>`}};W.styles=[i,ze],U([h({type:Number})],W.prototype,`rings`,void 0),U([h({type:Number})],W.prototype,`duration`,void 0),U([h({type:Number})],W.prototype,`opacity`,void 0),U([h()],W.prototype,`size`,void 0),U([h()],W.prototype,`variant`,void 0),W=U([C(`wui-pulse`)],W);var Ge=[{id:`received`,title:`Receiving funds`,icon:`dollar`},{id:`processing`,title:`Swapping asset`,icon:`recycleHorizontal`},{id:`sending`,title:`Sending asset to the recipient address`,icon:`send`}],Ke=[`success`,`submitted`,`failure`,`timeout`,`refund`],qe=f`
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
`,G=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Je={received:[`pending`,`success`,`submitted`],processing:[`success`,`submitted`],sending:[`success`,`submitted`]},Ye=3e3,K=class extends x{constructor(){super(),this.unsubscribe=[],this.pollingInterval=null,this.paymentAsset=B.state.paymentAsset,this.quoteStatus=B.state.quoteStatus,this.quote=B.state.quote,this.amount=B.state.amount,this.namespace=void 0,this.caipAddress=void 0,this.profileName=null,this.activeConnectorIds=c.state.activeConnectorIds,this.selectedExchange=B.state.selectedExchange,this.initializeNamespace(),this.unsubscribe.push(B.subscribeKey(`quoteStatus`,e=>this.quoteStatus=e),B.subscribeKey(`quote`,e=>this.quote=e),c.subscribeKey(`activeConnectorIds`,e=>this.activeConnectorIds=e),B.subscribeKey(`selectedExchange`,e=>this.selectedExchange=e))}connectedCallback(){super.connectedCallback(),this.startPolling()}disconnectedCallback(){super.disconnectedCallback(),this.stopPolling(),this.unsubscribe.forEach(e=>e())}render(){return a`
      <wui-flex flexDirection="column" .padding=${[`3`,`0`,`0`,`0`]} gap="2">
        ${this.tokenTemplate()} ${this.paymentTemplate()} ${this.paymentLifecycleTemplate()}
      </wui-flex>
    `}tokenTemplate(){let e=I(this.amount||`0`),t=this.paymentAsset.metadata.symbol??`Unknown`,n=S.getAllRequestedCaipNetworks().find(e=>e.caipNetworkId===this.paymentAsset.network),r=this.quoteStatus===`failure`||this.quoteStatus===`timeout`||this.quoteStatus===`refund`;return this.quoteStatus===`success`||this.quoteStatus===`submitted`?a`<wui-flex alignItems="center" justifyContent="center">
        <wui-flex justifyContent="center" alignItems="center" class="token-image success">
          <wui-icon name="checkmark" color="success" size="inherit"></wui-icon>
        </wui-flex>
      </wui-flex>`:r?a`<wui-flex alignItems="center" justifyContent="center">
        <wui-flex justifyContent="center" alignItems="center" class="token-image error">
          <wui-icon name="close" color="error" size="inherit"></wui-icon>
        </wui-flex>
      </wui-flex>`:a`
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
                src=${y(o.getNetworkImage(n))}
                class="chain-image"
                size="mdl"
              ></wui-image>

              <wui-text variant="lg-regular" color="primary">${e} ${t}</wui-text>
            </wui-flex>
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}paymentTemplate(){return a`
      <wui-flex flexDirection="column" gap="2" .padding=${[`0`,`6`,`0`,`6`]}>
        ${this.renderPayment()}
        <wui-separator></wui-separator>
        ${this.renderWallet()}
      </wui-flex>
    `}paymentLifecycleTemplate(){let e=this.getStepsWithStatus();return a`
      <wui-flex flexDirection="column" padding="4" gap="2" class="payment-lifecycle-container">
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="md-regular" color="secondary">PAYMENT CYCLE</wui-text>

          ${this.renderPaymentCycleBadge()}
        </wui-flex>

        <wui-flex flexDirection="column" gap="5" .padding=${[`2`,`0`,`2`,`0`]}>
          ${e.map(e=>this.renderStep(e))}
        </wui-flex>
      </wui-flex>
    `}renderPaymentCycleBadge(){let e=this.quoteStatus===`failure`||this.quoteStatus===`timeout`||this.quoteStatus===`refund`,t=this.quoteStatus===`success`||this.quoteStatus===`submitted`;return e?a`
        <wui-flex
          justifyContent="center"
          alignItems="center"
          class="payment-step-badge error"
          gap="1"
        >
          <wui-icon name="close" color="error" size="xs"></wui-icon>
          <wui-text variant="sm-regular" color="error">Failed</wui-text>
        </wui-flex>
      `:t?a`
        <wui-flex
          justifyContent="center"
          alignItems="center"
          class="payment-step-badge success"
          gap="1"
        >
          <wui-icon name="checkmark" color="success" size="xs"></wui-icon>
          <wui-text variant="sm-regular" color="success">Completed</wui-text>
        </wui-flex>
      `:a`
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
    `}renderPayment(){let e=S.getAllRequestedCaipNetworks().find(e=>{let t=this.quote?.origin.currency.network;if(!t)return!1;let{chainId:r}=n.parseCaipNetworkId(t);return d.isLowerCaseMatch(e.id.toString(),r.toString())});return a`
      <wui-flex
        alignItems="flex-start"
        justifyContent="space-between"
        .padding=${[`3`,`0`,`3`,`0`]}
      >
        <wui-text variant="lg-regular" color="secondary">Payment Method</wui-text>

        <wui-flex flexDirection="column" alignItems="flex-end" gap="1">
          <wui-flex alignItems="center" gap="01">
            <wui-text variant="lg-regular" color="primary">${I(p.formatNumber(this.quote?.origin.amount||`0`,{decimals:this.quote?.origin.currency.metadata.decimals??0}).toString())}</wui-text>
            <wui-text variant="lg-regular" color="secondary">${this.quote?.origin.currency.metadata.symbol??`Unknown`}</wui-text>
          </wui-flex>

          <wui-flex alignItems="center" gap="1">
            <wui-text variant="md-regular" color="secondary">on</wui-text>
            <wui-image
              src=${y(o.getNetworkImage(e))}
              size="xs"
            ></wui-image>
            <wui-text variant="md-regular" color="secondary">${e?.name}</wui-text>
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}renderWallet(){return a`
      <wui-flex
        alignItems="flex-start"
        justifyContent="space-between"
        .padding=${[`3`,`0`,`3`,`0`]}
      >
        <wui-text variant="lg-regular" color="secondary">Wallet</wui-text>

        ${this.renderWalletText()}
      </wui-flex>
    `}renderWalletText(){let{image:e}=this.getWalletProperties({namespace:this.namespace}),{address:t}=this.caipAddress?n.parseCaipAddress(this.caipAddress):{},i=this.selectedExchange?.name;return this.selectedExchange?a`
        <wui-flex alignItems="center" justifyContent="flex-end" gap="1">
          <wui-text variant="lg-regular" color="primary">${i}</wui-text>
          <wui-image src=${y(this.selectedExchange.imageUrl)} size="mdl"></wui-image>
        </wui-flex>
      `:a`
      <wui-flex alignItems="center" justifyContent="flex-end" gap="1">
        <wui-text variant="lg-regular" color="primary">
          ${r.getTruncateString({string:this.profileName||t||i||``,charsStart:this.profileName?16:4,charsEnd:this.profileName?0:6,truncate:this.profileName?`end`:`middle`})}
        </wui-text>

        <wui-image src=${y(e)} size="mdl"></wui-image>
      </wui-flex>
    `}getStepsWithStatus(){return this.quoteStatus===`failure`||this.quoteStatus===`timeout`||this.quoteStatus===`refund`?Ge.map(e=>({...e,status:`failed`})):Ge.map(e=>{let t=(Je[e.id]??[]).includes(this.quoteStatus)?`completed`:`pending`;return{...e,status:t}})}renderStep({title:t,icon:n,status:r}){return a`
      <wui-flex alignItems="center" gap="3">
        <wui-flex justifyContent="center" alignItems="center" class="step-icon-container">
          <wui-icon name=${n} color="default" size="mdl"></wui-icon>

          <wui-flex alignItems="center" justifyContent="center" class=${e({"step-icon-box":!0,success:r===`completed`})}>
            ${this.renderStatusIndicator(r)}
          </wui-flex>
        </wui-flex>

        <wui-text variant="md-regular" color="primary">${t}</wui-text>
      </wui-flex>
    `}renderStatusIndicator(e){return e===`completed`?a`<wui-icon size="sm" color="success" name="checkmark"></wui-icon>`:e===`failed`?a`<wui-icon size="sm" color="error" name="close"></wui-icon>`:e===`pending`?a`<wui-loading-spinner color="accent-primary" size="sm"></wui-loading-spinner>`:null}startPolling(){this.pollingInterval||=(this.fetchQuoteStatus(),setInterval(()=>{this.fetchQuoteStatus()},Ye))}stopPolling(){this.pollingInterval&&=(clearInterval(this.pollingInterval),null)}async fetchQuoteStatus(){let e=B.state.requestId;if(!e||Ke.includes(this.quoteStatus))this.stopPolling();else try{await B.fetchQuoteStatus({requestId:e}),Ke.includes(this.quoteStatus)&&this.stopPolling()}catch{this.stopPolling()}}initializeNamespace(){let e=S.state.activeChain;this.namespace=e,this.caipAddress=S.getAccountData(e)?.caipAddress,this.profileName=S.getAccountData(e)?.profileName??null,this.unsubscribe.push(S.subscribeChainProp(`accountState`,e=>{this.caipAddress=e?.caipAddress,this.profileName=e?.profileName??null},e))}getWalletProperties({namespace:e}){if(!e)return{name:void 0,image:void 0};let t=this.activeConnectorIds[e];if(!t)return{name:void 0,image:void 0};let n=c.getConnector({id:t,namespace:e});if(!n)return{name:void 0,image:void 0};let r=o.getConnectorImage(n);return{name:n.name,image:r}}};K.styles=qe,G([g()],K.prototype,`paymentAsset`,void 0),G([g()],K.prototype,`quoteStatus`,void 0),G([g()],K.prototype,`quote`,void 0),G([g()],K.prototype,`amount`,void 0),G([g()],K.prototype,`namespace`,void 0),G([g()],K.prototype,`caipAddress`,void 0),G([g()],K.prototype,`profileName`,void 0),G([g()],K.prototype,`activeConnectorIds`,void 0),G([g()],K.prototype,`selectedExchange`,void 0),K=G([C(`w3m-pay-loading-view`)],K);var Xe=oe`
  :host {
    display: block;
  }
`,Ze=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Qe=class extends x{render(){return a`
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
    `}};Qe.styles=[Xe],Qe=Ze([C(`w3m-pay-fees-skeleton`)],Qe);var $e=f`
  :host {
    display: block;
  }

  wui-image {
    border-radius: ${({borderRadius:e})=>e.round};
  }
`,et=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},q=class extends x{constructor(){super(),this.unsubscribe=[],this.quote=B.state.quote,this.unsubscribe.push(B.subscribeKey(`quote`,e=>this.quote=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return a`
      <wui-flex flexDirection="column" gap="4">
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="md-regular" color="secondary">Pay</wui-text>
          <wui-text variant="md-regular" color="primary">
            ${p.formatNumber(this.quote?.origin.amount||`0`,{decimals:this.quote?.origin.currency.metadata.decimals??0,round:6}).toString()} ${this.quote?.origin.currency.metadata.symbol||`Unknown`}
          </wui-text>
        </wui-flex>

        ${this.quote&&this.quote.fees.length>0?this.quote.fees.map(e=>this.renderFee(e)):null}
      </wui-flex>
    `}renderFee(e){let t=e.id===`network`,n=p.formatNumber(e.amount||`0`,{decimals:e.currency.metadata.decimals??0,round:6}).toString();if(t){let t=S.getAllRequestedCaipNetworks().find(t=>d.isLowerCaseMatch(t.caipNetworkId,e.currency.network));return a`
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="md-regular" color="secondary">${e.label}</wui-text>

          <wui-flex flexDirection="column" alignItems="flex-end" gap="2">
            <wui-text variant="md-regular" color="primary">
              ${n} ${e.currency.metadata.symbol||`Unknown`}
            </wui-text>

            <wui-flex alignItems="center" gap="01">
              <wui-image
                src=${y(o.getNetworkImage(t))}
                size="xs"
              ></wui-image>
              <wui-text variant="sm-regular" color="secondary">
                ${t?.name||`Unknown`}
              </wui-text>
            </wui-flex>
          </wui-flex>
        </wui-flex>
      `}return a`
      <wui-flex alignItems="center" justifyContent="space-between">
        <wui-text variant="md-regular" color="secondary">${e.label}</wui-text>
        <wui-text variant="md-regular" color="primary">
          ${n} ${e.currency.metadata.symbol||`Unknown`}
        </wui-text>
      </wui-flex>
    `}};q.styles=[$e],et([g()],q.prototype,`quote`,void 0),q=et([C(`w3m-pay-fees`)],q);var tt=f`
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
`,nt=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},J=class extends x{constructor(){super(),this.unsubscribe=[],this.selectedExchange=B.state.selectedExchange,this.unsubscribe.push(B.subscribeKey(`selectedExchange`,e=>this.selectedExchange=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return a`
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

        ${this.selectedExchange?null:a`<wui-button
              size="md"
              variant="neutral-secondary"
              @click=${this.dispatchConnectOtherWalletEvent.bind(this)}
              >Connect other wallet</wui-button
            >`}
      </wui-flex>
    `}dispatchConnectOtherWalletEvent(){this.dispatchEvent(new CustomEvent(`connectOtherWallet`,{detail:!0,bubbles:!0,composed:!0}))}};J.styles=[tt],nt([h({type:Array})],J.prototype,`selectedExchange`,void 0),J=nt([C(`w3m-pay-options-empty`)],J);var rt=f`
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
`,it=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},at=class extends x{render(){return a`
      <wui-flex flexDirection="column" gap="2" class="pay-options-container">
        ${this.renderOptionEntry()} ${this.renderOptionEntry()} ${this.renderOptionEntry()}
      </wui-flex>
    `}renderOptionEntry(){return a`
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
    `}};at.styles=[rt],at=it([C(`w3m-pay-options-skeleton`)],at);var ot=f`
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
`,Y=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},st=300,X=class extends x{constructor(){super(),this.unsubscribe=[],this.options=[],this.selectedPaymentAsset=null}disconnectedCallback(){var e;this.unsubscribe.forEach(e=>e()),(e=this.resizeObserver)==null||e.disconnect(),(this.shadowRoot?.querySelector(`.pay-options-container`))?.removeEventListener(`scroll`,this.handleOptionsListScroll.bind(this))}firstUpdated(){var e;let t=this.shadowRoot?.querySelector(`.pay-options-container`);t&&(requestAnimationFrame(this.handleOptionsListScroll.bind(this)),t?.addEventListener(`scroll`,this.handleOptionsListScroll.bind(this)),this.resizeObserver=new ResizeObserver(()=>{this.handleOptionsListScroll()}),(e=this.resizeObserver)==null||e.observe(t),this.handleOptionsListScroll())}render(){return a`
      <wui-flex flexDirection="column" gap="2" class="pay-options-container">
        ${this.options.map(e=>this.payOptionTemplate(e))}
      </wui-flex>
    `}payOptionTemplate(e){let{network:t,metadata:n,asset:r,amount:i=`0`}=e,s=S.getAllRequestedCaipNetworks().find(e=>e.caipNetworkId===t),c=`${t}:${r}`==`${this.selectedPaymentAsset?.network}:${this.selectedPaymentAsset?.asset}`,l=p.bigNumber(i,{safe:!0}),u=l.gt(0);return a`
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
              src=${y(n.logoURI)}
              class="token-image"
              size="3xl"
            ></wui-image>
            <wui-image
              src=${y(o.getNetworkImage(s))}
              class="chain-image"
              size="md"
            ></wui-image>
          </wui-flex>

          <wui-flex flexDirection="column" gap="1">
            <wui-text variant="lg-regular" color="primary">${n.symbol}</wui-text>
            ${u?a`<wui-text variant="sm-regular" color="secondary">
                  ${l.round(6).toString()} ${n.symbol}
                </wui-text>`:null}
          </wui-flex>
        </wui-flex>

        ${c?a`<wui-icon name="checkmark" size="md" color="success"></wui-icon>`:null}
      </wui-flex>
    `}handleOptionsListScroll(){let e=this.shadowRoot?.querySelector(`.pay-options-container`);e&&(e.scrollHeight>st?(e.style.setProperty(`--options-mask-image`,`linear-gradient(
          to bottom,
          rgba(0, 0, 0, calc(1 - var(--options-scroll--top-opacity))) 0px,
          rgba(200, 200, 200, calc(1 - var(--options-scroll--top-opacity))) 1px,
          black 50px,
          black calc(100% - 50px),
          rgba(155, 155, 155, calc(1 - var(--options-scroll--bottom-opacity))) calc(100% - 1px),
          rgba(0, 0, 0, calc(1 - var(--options-scroll--bottom-opacity))) 100%
        )`),e.style.setProperty(`--options-scroll--top-opacity`,ue.interpolate([0,50],[0,1],e.scrollTop).toString()),e.style.setProperty(`--options-scroll--bottom-opacity`,ue.interpolate([0,50],[0,1],e.scrollHeight-e.scrollTop-e.offsetHeight).toString())):(e.style.setProperty(`--options-mask-image`,`none`),e.style.setProperty(`--options-scroll--top-opacity`,`0`),e.style.setProperty(`--options-scroll--bottom-opacity`,`0`)))}};X.styles=[ot],Y([h({type:Array})],X.prototype,`options`,void 0),Y([h()],X.prototype,`selectedPaymentAsset`,void 0),Y([h()],X.prototype,`onSelect`,void 0),X=Y([C(`w3m-pay-options`)],X);var ct=f`
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
`,Z=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Q={eip155:`ethereum`,solana:`solana`,bip122:`bitcoin`,ton:`ton`},lt={eip155:{icon:Q.eip155,label:`EVM`},solana:{icon:Q.solana,label:`Solana`},bip122:{icon:Q.bip122,label:`Bitcoin`},ton:{icon:Q.ton,label:`Ton`}},$=class extends x{constructor(){super(),this.unsubscribe=[],this.profileName=null,this.paymentAsset=B.state.paymentAsset,this.namespace=void 0,this.caipAddress=void 0,this.amount=B.state.amount,this.recipient=B.state.recipient,this.activeConnectorIds=c.state.activeConnectorIds,this.selectedPaymentAsset=B.state.selectedPaymentAsset,this.selectedExchange=B.state.selectedExchange,this.isFetchingQuote=B.state.isFetchingQuote,this.quoteError=B.state.quoteError,this.quote=B.state.quote,this.isFetchingTokenBalances=B.state.isFetchingTokenBalances,this.tokenBalances=B.state.tokenBalances,this.isPaymentInProgress=B.state.isPaymentInProgress,this.exchangeUrlForQuote=B.state.exchangeUrlForQuote,this.completedTransactionsCount=0,this.unsubscribe.push(B.subscribeKey(`paymentAsset`,e=>this.paymentAsset=e)),this.unsubscribe.push(B.subscribeKey(`tokenBalances`,e=>this.onTokenBalancesChanged(e))),this.unsubscribe.push(B.subscribeKey(`isFetchingTokenBalances`,e=>this.isFetchingTokenBalances=e)),this.unsubscribe.push(c.subscribeKey(`activeConnectorIds`,e=>this.activeConnectorIds=e)),this.unsubscribe.push(B.subscribeKey(`selectedPaymentAsset`,e=>this.selectedPaymentAsset=e)),this.unsubscribe.push(B.subscribeKey(`isFetchingQuote`,e=>this.isFetchingQuote=e)),this.unsubscribe.push(B.subscribeKey(`quoteError`,e=>this.quoteError=e)),this.unsubscribe.push(B.subscribeKey(`quote`,e=>this.quote=e)),this.unsubscribe.push(B.subscribeKey(`amount`,e=>this.amount=e)),this.unsubscribe.push(B.subscribeKey(`recipient`,e=>this.recipient=e)),this.unsubscribe.push(B.subscribeKey(`isPaymentInProgress`,e=>this.isPaymentInProgress=e)),this.unsubscribe.push(B.subscribeKey(`selectedExchange`,e=>this.selectedExchange=e)),this.unsubscribe.push(B.subscribeKey(`exchangeUrlForQuote`,e=>this.exchangeUrlForQuote=e)),this.resetQuoteState(),this.initializeNamespace(),this.fetchTokens()}disconnectedCallback(){super.disconnectedCallback(),this.resetAssetsState(),this.unsubscribe.forEach(e=>e())}updated(e){super.updated(e),e.has(`selectedPaymentAsset`)&&this.fetchQuote()}render(){return a`
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
    `}profileTemplate(){if(this.selectedExchange){let e=p.formatNumber(this.quote?.origin.amount,{decimals:this.quote?.origin.currency.metadata.decimals??0}).toString();return a`
        <wui-flex
          .padding=${[`4`,`3`,`4`,`3`]}
          alignItems="center"
          justifyContent="space-between"
          gap="2"
        >
          <wui-text variant="lg-regular" color="secondary">Paying with</wui-text>

          ${this.quote?a`<wui-text variant="lg-regular" color="primary">
                ${p.bigNumber(e,{safe:!0}).round(6).toString()}
                ${this.quote.origin.currency.metadata.symbol}
              </wui-text>`:a`<wui-shimmer width="80px" height="18px" variant="light"></wui-shimmer>`}
        </wui-flex>
      `}let e=b.getPlainAddress(this.caipAddress)??``,{name:t,image:n}=this.getWalletProperties({namespace:this.namespace}),{icon:r,label:i}=lt[this.namespace]??{};return a`
      <wui-flex
        .padding=${[`4`,`3`,`4`,`3`]}
        alignItems="center"
        justifyContent="space-between"
        gap="2"
      >
        <wui-wallet-switch
          profileName=${y(this.profileName)}
          address=${y(e)}
          imageSrc=${y(n)}
          alt=${y(t)}
          @click=${this.onConnectOtherWallet.bind(this)}
          data-testid="wui-wallet-switch"
        ></wui-wallet-switch>

        <wui-wallet-switch
          profileName=${y(i)}
          address=${y(e)}
          icon=${y(r)}
          iconSize="xs"
          .enableGreenCircle=${!1}
          alt=${y(i)}
          @click=${this.onConnectOtherWallet.bind(this)}
          data-testid="wui-wallet-switch"
        ></wui-wallet-switch>
      </wui-flex>
    `}initializeNamespace(){let e=S.state.activeChain;this.namespace=e,this.caipAddress=S.getAccountData(e)?.caipAddress,this.profileName=S.getAccountData(e)?.profileName??null,this.unsubscribe.push(S.subscribeChainProp(`accountState`,e=>this.onAccountStateChanged(e),e))}async fetchTokens(){if(this.namespace){let e;if(this.caipAddress){let{chainId:t,chainNamespace:r}=n.parseCaipAddress(this.caipAddress),i=`${r}:${t}`;e=S.getAllRequestedCaipNetworks().find(e=>e.caipNetworkId===i)}await B.fetchTokens({caipAddress:this.caipAddress,caipNetwork:e,namespace:this.namespace})}}fetchQuote(){if(this.amount&&this.recipient&&this.selectedPaymentAsset&&this.paymentAsset){let{address:e}=this.caipAddress?n.parseCaipAddress(this.caipAddress):{};B.fetchQuote({amount:this.amount.toString(),address:e,sourceToken:this.selectedPaymentAsset,toToken:this.paymentAsset,recipient:this.recipient})}}getWalletProperties({namespace:e}){if(!e)return{name:void 0,image:void 0};let t=this.activeConnectorIds[e];if(!t)return{name:void 0,image:void 0};let n=c.getConnector({id:t,namespace:e});if(!n)return{name:void 0,image:void 0};let r=o.getConnectorImage(n);return{name:n.name,image:r}}paymentOptionsViewTemplate(){return a`
      <wui-flex flexDirection="column" gap="2">
        <wui-text variant="sm-regular" color="secondary">CHOOSE PAYMENT OPTION</wui-text>
        <wui-flex class="pay-options-container">${this.paymentOptionsTemplate()}</wui-flex>
      </wui-flex>
    `}paymentOptionsTemplate(){let t=this.getPaymentAssetFromTokenBalances();return this.isFetchingTokenBalances?a`<w3m-pay-options-skeleton></w3m-pay-options-skeleton>`:t.length===0?a`<w3m-pay-options-empty
        @connectOtherWallet=${this.onConnectOtherWallet.bind(this)}
      ></w3m-pay-options-empty>`:a`<w3m-pay-options
      class=${e({disabled:this.isFetchingQuote})}
      .options=${t}
      .selectedPaymentAsset=${y(this.selectedPaymentAsset)}
      .onSelect=${this.onSelectedPaymentAssetChanged.bind(this)}
    ></w3m-pay-options>`}amountWithFeeTemplate(){return this.isFetchingQuote||!this.selectedPaymentAsset||this.quoteError?a`<w3m-pay-fees-skeleton></w3m-pay-fees-skeleton>`:a`<w3m-pay-fees></w3m-pay-fees>`}paymentActionsTemplate(){let e=this.isFetchingQuote||this.isFetchingTokenBalances,t=this.isFetchingQuote||this.isFetchingTokenBalances||!this.selectedPaymentAsset||!!this.quoteError,n=p.formatNumber(this.quote?.origin.amount??0,{decimals:this.quote?.origin.currency.metadata.decimals??0}).toString();return this.selectedExchange?e||t?a`
          <wui-shimmer width="100%" height="48px" variant="light" ?rounded=${!0}></wui-shimmer>
        `:a`<wui-button
        size="lg"
        fullWidth
        variant="accent-secondary"
        @click=${this.onPayWithExchange.bind(this)}
      >
        ${`Continue in ${this.selectedExchange.name}`}

        <wui-icon name="arrowRight" color="inherit" size="sm" slot="iconRight"></wui-icon>
      </wui-button>`:a`
      <wui-flex alignItems="center" justifyContent="space-between">
        <wui-flex flexDirection="column" gap="1">
          <wui-text variant="md-regular" color="secondary">Order Total</wui-text>

          ${e||t?a`<wui-shimmer width="58px" height="32px" variant="light"></wui-shimmer>`:a`<wui-flex alignItems="center" gap="01">
                <wui-text variant="h4-regular" color="primary">${I(n)}</wui-text>

                <wui-text variant="lg-regular" color="secondary">
                  ${this.quote?.origin.currency.metadata.symbol||`Unknown`}
                </wui-text>
              </wui-flex>`}
        </wui-flex>

        ${this.actionButtonTemplate({isLoading:e,isDisabled:t})}
      </wui-flex>
    `}actionButtonTemplate(e){let t=j(this.quote),{isLoading:n,isDisabled:r}=e,i=`Pay`;return t.length>1&&this.completedTransactionsCount===0&&(i=`Approve`),a`
      <wui-button
        size="lg"
        variant="accent-primary"
        ?loading=${n||this.isPaymentInProgress}
        ?disabled=${r||this.isPaymentInProgress}
        @click=${()=>{t.length>0?this.onSendTransactions():this.onTransfer()}}
      >
        ${i}
        ${n?null:a`<wui-icon
              name="arrowRight"
              color="inherit"
              size="sm"
              slot="iconRight"
            ></wui-icon>`}
      </wui-button>
    `}getPaymentAssetFromTokenBalances(){return this.namespace?(this.tokenBalances[this.namespace]??[]).map(e=>{try{return Me(e)}catch{return null}}).filter(e=>!!e).filter(e=>{let{chainId:t}=n.parseCaipNetworkId(e.network),{chainId:r}=n.parseCaipNetworkId(this.paymentAsset.network);return d.isLowerCaseMatch(e.asset,this.paymentAsset.asset)?!0:this.selectedExchange?!d.isLowerCaseMatch(t.toString(),r.toString()):!0}):[]}onTokenBalancesChanged(e){this.tokenBalances=e;let[t]=this.getPaymentAssetFromTokenBalances();t&&B.setSelectedPaymentAsset(t)}async onConnectOtherWallet(){await c.connect(),await s.open({view:`PayQuote`})}onAccountStateChanged(e){let{address:t}=this.caipAddress?n.parseCaipAddress(this.caipAddress):{};if(this.caipAddress=e?.caipAddress,this.profileName=e?.profileName??null,t){let{address:e}=this.caipAddress?n.parseCaipAddress(this.caipAddress):{};e?d.isLowerCaseMatch(e,t)||(this.resetAssetsState(),this.resetQuoteState(),this.fetchTokens()):s.close()}}onSelectedPaymentAssetChanged(e){this.isFetchingQuote||B.setSelectedPaymentAsset(e)}async onTransfer(){let e=A(this.quote);if(e){if(!d.isLowerCaseMatch(this.selectedPaymentAsset?.asset,e.deposit.currency))throw Error(`Quote asset is not the same as the selected payment asset`);let t=this.selectedPaymentAsset?.amount??`0`,r=p.formatNumber(e.deposit.amount,{decimals:this.selectedPaymentAsset?.metadata.decimals??0}).toString();if(!p.bigNumber(t).gte(r)){m.showError(`Insufficient funds`);return}if(this.quote&&this.selectedPaymentAsset&&this.caipAddress&&this.namespace){let{address:t}=n.parseCaipAddress(this.caipAddress);await B.onTransfer({chainNamespace:this.namespace,fromAddress:t,toAddress:e.deposit.receiver,amount:r,paymentAsset:this.selectedPaymentAsset}),B.setRequestId(e.requestId),w.push(`PayLoading`)}}}async onSendTransactions(){let e=this.selectedPaymentAsset?.amount??`0`,t=p.formatNumber(this.quote?.origin.amount??0,{decimals:this.selectedPaymentAsset?.metadata.decimals??0}).toString();if(!p.bigNumber(e).gte(t)){m.showError(`Insufficient funds`);return}let n=j(this.quote),[r]=j(this.quote,this.completedTransactionsCount);r&&this.namespace&&(await B.onSendTransaction({namespace:this.namespace,transactionStep:r}),this.completedTransactionsCount+=1,this.completedTransactionsCount===n.length&&(B.setRequestId(r.requestId),w.push(`PayLoading`)))}onPayWithExchange(){if(this.exchangeUrlForQuote){let e=b.returnOpenHref(``,`popupWindow`,`scrollbar=yes,width=480,height=720`);if(!e)throw Error(`Could not create popup window`);e.location.href=this.exchangeUrlForQuote;let t=A(this.quote);t&&B.setRequestId(t.requestId),B.initiatePayment(),w.push(`PayLoading`)}}resetAssetsState(){B.setSelectedPaymentAsset(null)}resetQuoteState(){B.resetQuoteState()}};$.styles=ct,Z([g()],$.prototype,`profileName`,void 0),Z([g()],$.prototype,`paymentAsset`,void 0),Z([g()],$.prototype,`namespace`,void 0),Z([g()],$.prototype,`caipAddress`,void 0),Z([g()],$.prototype,`amount`,void 0),Z([g()],$.prototype,`recipient`,void 0),Z([g()],$.prototype,`activeConnectorIds`,void 0),Z([g()],$.prototype,`selectedPaymentAsset`,void 0),Z([g()],$.prototype,`selectedExchange`,void 0),Z([g()],$.prototype,`isFetchingQuote`,void 0),Z([g()],$.prototype,`quoteError`,void 0),Z([g()],$.prototype,`quote`,void 0),Z([g()],$.prototype,`isFetchingTokenBalances`,void 0),Z([g()],$.prototype,`tokenBalances`,void 0),Z([g()],$.prototype,`isPaymentInProgress`,void 0),Z([g()],$.prototype,`exchangeUrlForQuote`,void 0),Z([g()],$.prototype,`completedTransactionsCount`,void 0),$=Z([C(`w3m-pay-quote-view`)],$);export{B as a,k as i,D as n,$ as o,H as r,K as t};