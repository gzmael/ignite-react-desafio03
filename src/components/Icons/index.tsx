import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome'
import { faGithub, IconDefinition } from '@fortawesome/free-brands-svg-icons'
import {
  faBuilding,
  faUserGroup,
  faCalendarDay,
  faChevronLeft,
  faComment,
  faUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons'

type VariantTypes =
  | 'github'
  | 'building'
  | 'group'
  | 'calendar'
  | 'left'
  | 'comment'
  | 'share'

type IconsProps = Omit<FontAwesomeIconProps, 'icon'> & {
  variant: VariantTypes
}

const iconsVariants: Record<VariantTypes, IconDefinition> = {
  github: faGithub,
  building: faBuilding,
  group: faUserGroup,
  calendar: faCalendarDay,
  left: faChevronLeft,
  comment: faComment,
  share: faUpRightFromSquare,
}

const Icons = ({ variant, ...rest }: IconsProps) => {
  return <FontAwesomeIcon {...rest} icon={iconsVariants[variant]} />
}

export { Icons }
