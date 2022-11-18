import { ListItem, ListItemProps } from "@chakra-ui/react";
import { Link } from "react-router-dom";

type Props = {
  link?: { path: string, name: string },
  shadowColor?: string,
} & ListItemProps;

export const ListCard = (props: Props) => {
  const { link, shadowColor = '#8B7366', children, ...defaultProps } = props;
  return (
    <ListItem
      border={'1px'}
      borderColor={shadowColor}
      p={link ? undefined : '1rem'}
      bgColor={'#fff'}
      transition='0.2s'
      boxShadow={`0.5rem 0.5rem ${shadowColor || ''}`}
      {...defaultProps}
      listStyleImage={'none'}
      listStyleType='none'
      position='relative'
      cursor={'pointer'}
      _hover={{ transform: 'scale(1.05)', }}
    >
      {link
        ? <Link to={link.path}
          style={{ display: 'inline-block', width: '100%', padding: '1rem' }}>{link.name}</Link>
        : children
      }
    </ListItem>
  );
};