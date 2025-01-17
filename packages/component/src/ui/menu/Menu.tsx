import { TooltipProps } from '@mui/material';

import { Popper, type PopperProps } from '../popper';
import { StyledMenuWrapper } from './styles';
export const Menu = (props: PopperProps & Omit<TooltipProps, 'title'>) => {
  const { content, placement = 'bottom-start', children } = props;
  return content ? (
    <Popper
      {...props}
      showArrow={false}
      content={
        <StyledMenuWrapper placement={placement}>{content}</StyledMenuWrapper>
      }
    >
      {children}
    </Popper>
  ) : null;
};

export default Menu;
