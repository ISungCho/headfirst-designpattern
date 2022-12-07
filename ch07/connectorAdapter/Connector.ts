/**
 * 클라이언트: 프로그램의 기존 비즈니스 로직을 포함하는 클래스
 * 클라이언트 인터페이스(타겟): 다른 클래스들이 클라이언트 코드와 공동 작업할 수 있도록 따라야하는 프로토콜
 * 어뎁티: 적응이 필요한 기존 인터헤이스를 정의
 * 어뎁터: 어뎁티 인터페이스를 타겟 인터페이스에 적응시킨다.
 */

// 타겟
interface Connector {
  name: string;
  voltage: number;
}

// 클라이언트
export class ConnectorUSA implements Connector {
  name: string = "US-Power-Plug";
  voltage: 110 = 110;
}

// 클라이언트
export class ConnectorKR implements Connector {
  name: string = "KR-Power-Plug";
  voltage: 220 = 220;
}

// 어댑티
export class UsSocket {
  connector: Connector = { voltage: 110, name: "US-Power-Socket" }

  plugin(connector: Connector) {
    if (connector.voltage !== this.connector.voltage) {
      console.error(`${connector.name}을 ${this.connector.name}에 연결하는데에 실패했습니다. ${connector.voltage}V가 아닌 ${this.connector.voltage}V를 연결해야합니다.`);
      return;
    }
    console.log(`${connector.name}이 ${this.connector.voltage}V인 ${this.connector.name}에 성공적으로 연결되었습니다.`);
  }
}

// 어댑터
export class KrToUsConnectorAdapter implements ConnectorUSA {
  voltage!: 110;
  name!: string;
  constructor({ name }: ConnectorKR) {
    this.name = name
    this.voltage = 110
    console.log(`${name}를 US-connector에 적응(Adapt)시켰습니다.`)
  }
}