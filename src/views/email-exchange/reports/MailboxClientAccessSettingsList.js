import React from 'react'
import { useSelector } from 'react-redux'
import TenantSelector from '../../../components/cipp/TenantSelector'
import CippDatatable from '../../../components/cipp/CippDatatable'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCardTitle,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'
import { cellBooleanFormatter } from '../../../components/cipp'

const columns = [
  {
    selector: (row) => row['displayName'],
    name: 'Display Name',
    sortable: true,
  },
  {
    selector: (row) => row['primarySmtpAddress'],
    name: 'Primary E-mail',
    sortable: true,
  },
  {
    selector: (row) => row['ecpenabled'],
    name: 'ECP Enabled',
    sortable: true,
    cell: cellBooleanFormatter(),
    center: true,
  },
  {
    selector: (row) => row['ewsenabled'],
    name: 'EWS Enabled',
    sortable: true,
    cell: cellBooleanFormatter(),
    center: true,
  },
  {
    selector: (row) => row['imapenabled'],
    name: 'IMAP Enabled',
    sortable: true,
    cell: cellBooleanFormatter(),
    center: true,
  },
  {
    selector: (row) => row['mapienabled'],
    name: 'MAPI Enabled',
    sortable: true,
    cell: cellBooleanFormatter(),
    center: true,
  },
  {
    selector: (row) => row['owaenabled'],
    name: 'OWA Enabled',
    sortable: true,
    cell: cellBooleanFormatter(),
    center: true,
  },
  {
    selector: (row) => row['popenabled'],
    name: 'POP Enabled',
    sortable: true,
    cell: cellBooleanFormatter(),
    center: true,
  },
  {
    selector: (row) => row['activesyncenabled'],
    name: 'ActiveSync Enabled',
    sortable: true,
    cell: cellBooleanFormatter(),
    center: true,
  },
]

const MailboxCASList = () => {
  const tenant = useSelector((state) => state.app.currentTenant)

  return (
    <div>
      <TenantSelector />
      <hr />
      <CCard>
        <CCardHeader>
          <CCardTitle className="text-primary">Mailbox client Access Settings</CCardTitle>
        </CCardHeader>
        <CCardBody>
          {Object.keys(tenant).length === 0 && <span>Select a tenant to get started.</span>}
          <CippDatatable
            keyField="id"
            reportName={`${tenant?.defaultDomainName}-ClientAccessSettings-List`}
            path="/api/ListMailboxCAS"
            columns={columns}
            params={{ TenantFilter: tenant?.defaultDomainName }}
          />
        </CCardBody>
      </CCard>
    </div>
  )
}

export default MailboxCASList
