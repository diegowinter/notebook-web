import { faNoteSticky, IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from '../styles/SideMenuOption.module.css'

interface SideMenuOptionProps {
  icon: IconDefinition
  label: String
}

const SideMenuOption = (props: SideMenuOptionProps) => {
  return (
    <div className={styles.sideMenuOption}>
      <div className={styles.icon}>
        <FontAwesomeIcon icon={props.icon} />
      </div>
      <span>{props.label}</span>
    </div>
  );
}

export default SideMenuOption;