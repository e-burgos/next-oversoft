import { IUserItemById } from '@/api/apiTypes';
import { TableColumn } from 'oversoft-ui/dist/Tables/DataTable/DataTable';
import Paragraph from 'oversoft-ui/dist/Typography/Paragraph';
import colors from 'oversoft-ui/dist/color-palette';

export const companiesColumns: TableColumn<IUserItemById>[] = [
  {
    name: 'Referencia',
    selector: (row) => row.value,
    cell: (row) => <p>{row.value}</p>,
    sortable: true,
    reorder: true,
  },
  {
    name: 'Descripción',
    selector: (row) => row.text,
    cell: (row) => <p>{row.text}</p>,
    sortable: true,
    reorder: true,
  },
  {
    name: 'Deshabilitado',
    selector: (row) => row.disabled,
    cell: (row) =>
      row.disabled ? (
        <Paragraph fontColor={colors.secondary.green}>Si</Paragraph>
      ) : (
        <Paragraph fontColor={colors.secondary.yellow}>No</Paragraph>
      ),
    sortable: true,
    reorder: true,
  },
];
