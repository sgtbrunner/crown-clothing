import React, { createContext, useCallback, useContext, useState } from 'react';
import PropTypes from 'prop-types';

import Dialog from './dialog.component';

const DialogContent = createContext();

const DialogProvider = (props) => {
  const [dialog, setDialog] = useState();
  const unsetDialog = useCallback(() => {
    setDialog();
  }, [setDialog]);

  return (
    <DialogContent.Provider value={{ unsetDialog, setDialog }} {...props}>
      {props.children}
      {dialog && <Dialog content={dialog} unsetDialog={unsetDialog} />}
    </DialogContent.Provider>
  );
};

const useDialog = () => {
  const context = useContext(DialogContent);
  if (context === undefined) {
    throw new Error('useDialog must be wrapped by a DialogProvider');
  }

  return context;
};

DialogProvider.propTypes = {
  children: PropTypes.object,
};

DialogProvider.defaulProps = {
  children: {},
};

export { DialogProvider, useDialog };
