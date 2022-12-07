import { UsSocket, ConnectorKR, ConnectorUSA, KrToUsConnectorAdapter } from "./Connector";

const usSocket = new UsSocket();

const krPowerPlug = new ConnectorKR();
const usPowerPlug = new ConnectorUSA();

usSocket.plugin(usPowerPlug);

usSocket.plugin(krPowerPlug);

usSocket.plugin(new KrToUsConnectorAdapter(krPowerPlug));
