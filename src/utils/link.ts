export function openKbankApp(menuId: string, bdu: string, sid: string) {
  let androidPackage = 'com.kbankwith.smartbank'
  let iosPackage = 'ukbanksmartbankweb://?'

  const data = {
    menuid: menuId,
    phashid: '',
  }

  let androidUrl = `intent://ukbanksmartbankweb?'${JSON.stringify(
    data
  )}#Intent;scheme=ukbanksmartbankweb;package=${androidPackage};S.market_referrer=mweb_bdu%3D${bdu}%26mweb_sid%3D${sid};end`

  const data2 = {
    ...data,
    referrer: `mweb_bdu%3D${bdu}%26mweb_sid%3D${sid}`,
  }

  const iosUrl = iosPackage + JSON.stringify(data2)

  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)

  if (isSafari) {
    location.href = iosUrl
  } else {
    location.href = androidUrl
  }
}
