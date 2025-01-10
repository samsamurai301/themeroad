import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { setTheme } from '../redux/themeSlice';

export const useThemeMode = () => {
  const dispatch = useDispatch();
  const mode = useSelector((state: RootState) => state.theme.mode);

  useEffect(() => {
    const savedMode = localStorage.getItem('themeMode') as 'light' | 'dark';
    if (savedMode) {
      dispatch(setTheme(savedMode));
    }
  }, [dispatch]);

  const toggleTheme = () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    localStorage.setItem('themeMode', newMode);
    dispatch(setTheme(newMode));
  };

  return { mode, toggleTheme };
};
