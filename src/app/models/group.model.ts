import { TransportType } from './transport-type.model';

export interface Group {
  id: number;
  periodId: number;
  // guide: Guide;
  // staffIds: Array<Staff>;
  passengerIds: Array<String>;
}
