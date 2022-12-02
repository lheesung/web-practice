import * as Bluetooth from 'react-bluetooth';

try {
    const result = await Bluetooth.requestDeviceAsync();
   
    if (result.type === 'cancel') {
      return;
    }
   
    const device: BluetoothDevice = result.device;
  } catch ({ message, code }) {
    console.log('Error:', message, code);
}
if (await Bluetooth.getAvailabilityAsync()) {
    // Is Available
    console.log('connected');
  }
addEventListener(
    listener: EventListenerOrEventListenerObject,
    useCapture?: boolean
): void
function Bt(){
    return(
        <>
            <h1>리액트 블루투스 <b>제발 성공하게 해주세요</b></h1>
        </>
    )
}

export default Bt;