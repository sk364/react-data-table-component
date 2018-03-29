import React from 'react';
import PropTypes from 'prop-types';

export const propTypes = {
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
  selectableRows: PropTypes.bool,
  expandableRows: PropTypes.bool,
  keyField: PropTypes.string,
  progressPending: PropTypes.bool,
  progressComponent: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.func,
  ]),
  progressCentered: PropTypes.bool,
  expanderStateField: PropTypes.string,
  expandableRowsComponent: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.func,
  ]),
  selectableRowsComponent: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.func,
  ]),
  selectableRowsComponentProps: PropTypes.object,
  customTheme: PropTypes.object,
  sortIcon: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  striped: PropTypes.bool,
  highlightOnHover: PropTypes.bool,
  pointerOnHover: PropTypes.bool,
  onServerSort: PropTypes.func,
  contextTitle: PropTypes.string,
  contextActions: PropTypes.arrayOf(PropTypes.node),
  onTableUpdate: PropTypes.func,
  clearSelectedRows: PropTypes.bool,
  defaultSortField: PropTypes.string,
  defaultSortAsc: PropTypes.bool,
  columns: PropTypes.array,
  data: PropTypes.array,
  className: PropTypes.string,
  style: PropTypes.object,
  responsive: PropTypes.bool,
  overflowY: PropTypes.bool,
  overflowYOffset: PropTypes.string,
  noDataComponent: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.func,
  ]),
  disabled: PropTypes.bool,
  noHeader: PropTypes.bool,
  onRowClicked: PropTypes.func,
};

export const defaultProps = {
  title: '',
  keyField: 'id',
  selectableRows: false,
  expandableRows: false,
  progressPending: false,
  progressComponent: <h2>Loading...</h2>,
  progressCentered: false,
  expanderStateField: '$$expander',
  expandableRowsComponent: <div>Add a custom expander component. Use props.data for row data</div>,
  selectableRowsComponent: 'input',
  selectableRowsComponentProps: {},
  customTheme: {},
  sortIcon: false,
  striped: false,
  highlightOnHover: false,
  pointerOnHover: false,
  onServerSort: null,
  contextTitle: '',
  contextActions: [],
  onTableUpdate: null,
  clearSelectedRows: false,
  defaultSortField: null,
  defaultSortAsc: true,
  columns: [],
  data: [],
  className: null,
  style: {},
  responsive: true,
  overflowY: false,
  overflowYOffset: '250px',
  noDataComponent: 'There are no records to display',
  disabled: false,
  noHeader: false,
  onRowClicked: null,
};
