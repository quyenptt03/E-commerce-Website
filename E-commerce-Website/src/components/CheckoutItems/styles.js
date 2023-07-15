import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  root: {
    width: '60%',
    borderRight: '1px solid #eaeaea',
    paddingTop: theme.spacing(6),
    paddingRight: theme.spacing(4),
  },

  title: {
    fontSize: '26px',
    color: '#333',
    textDecoration: 'none',
  },

  title1: {
    marginTop: theme.spacing(4),
    fontSize: '20px',
    color: '#333',
    textDecoration: 'none',
  },

  stepLabel: {
    color: '#333',
    fontSize: '14px',
    '& > span > svg.MuiStepIcon-root.MuiStepIcon-completed': {
      color: '#197bbd',
    },
    '& > span > svg.MuiStepIcon-root.MuiStepIcon-active': {
      color: '#197bbd',
    },
  },

  stepper: {
    paddingLeft: 0,
  },

  buttons: {
    display: 'flex',
    marginTop: theme.spacing(3),
    alignItems: 'center',
  },

  submit: {
    width: 'fit-content',
    textTransform: 'capitalize',
    background: '#197bbd',
    borderRadius: '8px',
    padding: '1.4em 1.7em',
    marginRight: theme.spacing(3),
    fontSize: '13px',
    color: '#fff',
    fontWeight: 500,
    textDecoration: 'none',
    transition: 'all .4s ease',
    '&:hover': {
      background: '#135e90',
    },
  },

  return: {
    color: '#197bbd',
    fontSize: '14px',
    textDecoration: 'none',
    cursor: 'pointer',
  },
}));
