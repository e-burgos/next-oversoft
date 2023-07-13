'use client';
import React, { FunctionComponent } from 'react';
import styles from './styles/companies.module.css';
import MenuWrapper from '../common/menu-wrapper';
import Heading from 'oversoft-ui/dist/Typography/Heading';
import Paragraph from 'oversoft-ui/dist/Typography/Paragraph';
import PlusCircle from 'oversoft-ui/dist/Assets/PlusCircle';
import FilterCircle from 'oversoft-ui/dist/Assets/FilterCircle';
import CopyCircle from 'oversoft-ui/dist/Assets/CopyCircle';
import GridCircle from 'oversoft-ui/dist/Assets/GridCircle';
import MenuCircle from 'oversoft-ui/dist/Assets/MenuCircle';
import SettingCircle from 'oversoft-ui/dist/Assets/SettingCircle';
import DataTable from 'oversoft-ui/dist/Tables/DataTable';
import { companiesColumns } from '@/utils/features/companies';
import { useProtectedRoute } from '@/hooks/useProtectedRoute';
import useApi from '@/api/api';

const Companies: FunctionComponent = () => {
  useProtectedRoute();

  const getApi = useApi('get-users-list-items-by-ids', 'jwt-auth');

  console.log(getApi.data?.data.result);
  return (
    <MenuWrapper
      headerChildren={
        <div className={styles.headerContent}>
          <div className={styles.titleContainer}>
            <Heading level={2}>Companies Groups</Heading>
            <div className={styles.breadcrums}>
              <Paragraph>Roots</Paragraph>
              <Paragraph>{'>'}</Paragraph>
              <Paragraph>Companies groups</Paragraph>
              <Paragraph>{'>'}</Paragraph>
              <Paragraph fontFamily="Rubik-Bold">Index</Paragraph>
            </div>
          </div>
          <div className={styles.actionsContainer}>
            <PlusCircle active />
            <FilterCircle />
            <CopyCircle />
            <GridCircle />
            <MenuCircle />
            <SettingCircle />
          </div>
        </div>
      }
    >
      <div className={styles.container}>
        <DataTable
          columns={companiesColumns}
          data={getApi.isSuccess ? getApi.data?.data.result : []}
          pagination
          paginationPerPage={10}
          selectableRows
        />
      </div>
    </MenuWrapper>
  );
};
export default Companies;
