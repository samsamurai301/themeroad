import { makeStyles } from '@mui/styles';

const useNavbarStyles = makeStyles((theme) => ({
  buttonHover: {
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}));

export default useNavbarStyles;
