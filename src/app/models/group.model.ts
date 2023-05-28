import { Guide } from './guide.model';
import { Staff } from './staff.model';
import { TransportType } from './transport-type.model';

export interface Group {
  name: string;
  guide: Guide;
  staff: Array<Staff>;
  passenger: Array<Staff>;
  transportType: TransportType;
}
