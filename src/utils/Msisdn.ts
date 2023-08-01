
  
  export function isMSISDN(msisdnToTest: string) {
    const msisdnRemovedSpace = formatMSISDN(msisdnToTest);
  
    return (
      /(034|038|032|033|020)\d{7}/.test(msisdnRemovedSpace || '') &&
      msisdnRemovedSpace !== '' &&
      msisdnRemovedSpace?.length === 10
    );
  }
  
  export function formatMSISDN(msisdnToTest: string) {
    if (!msisdnToTest) return;
    const searchRegExp = /[\s\-\(\)]*/g;
  
    let msisdnRemovedSpace = msisdnToTest
      ?.toString()
      ?.replace(searchRegExp, '')
      .trim();
    // console.log("+261test", msisdnRemovedSpace, msisdnRemovedSpace.startsWith('+261'));
    if (msisdnRemovedSpace.startsWith('+261')) {
      msisdnRemovedSpace = msisdnRemovedSpace.replace(/^\+261/, '0');
    }
    if (msisdnRemovedSpace.startsWith('261')) {
      msisdnRemovedSpace = msisdnRemovedSpace.replace(/^261/, '0');
    }
    // console.log('261Mandalo', msisdnRemovedSpace.startsWith('261'));
  
    return msisdnRemovedSpace;
  }