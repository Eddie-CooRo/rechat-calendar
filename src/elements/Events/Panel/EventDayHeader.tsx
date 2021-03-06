import React from 'react';
import { styled } from '@material-ui/core/styles';
import ListSubheader, {
  ListSubheaderProps
} from '@material-ui/core/ListSubheader';

type EventDayHeaderProps = {
  active?: boolean;
  onMount: () => void;
};
const EventDayHeader = styled(
  ({ active, onMount, ...rest }: ListSubheaderProps & EventDayHeaderProps) => {
    React.useEffect(() => {
      onMount();
    }, []);
    return <ListSubheader {...rest} />;
  }
)(arg => {
  const { theme } = arg;
  const { active } = (arg as unknown) as EventDayHeaderProps;
  return {
    ...theme.typography.subtitle1,
    fontWeight: theme.typography.fontWeightMedium,
    backgroundColor: active
      ? theme.palette.primary.main
      : theme.palette.grey[100],
    borderRadius: theme.shape.borderRadius,
    color: active ? theme.palette.common.white : theme.palette.common.black
  };
});

export default EventDayHeader;
