import { faBook, faChevronLeft, faGear, faNoteSticky, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../styles/SideMenu.module.css'
import SideMenuOption from './SideMenuOption';

const SideMenu = () => {
  return (
    <div className={styles.sideMenu}>
      <div>
        {/* Side menu Header */}
        <div className={styles.pageTitle}>
          <div className={styles.userName}>
            Notebook de Diego Winter
          </div>
          <div className={styles.userImage} />
        </div>
        {/* End side menu Header */}

        {/* Side menu options */}
        <div className={styles.menuOptions}>
          <SideMenuOption icon={faBook} label={'Cadernos'} />
          <SideMenuOption icon={faNoteSticky} label={'Anotações rápidas'} />
          <SideMenuOption icon={faUserGroup} label={'Compartilhados comigo'} />
        </div>
        {/* End side menu options */}

        {/* Side menu recent */}
        <div className={styles.recentSection}>
          <div className={styles.recentSectionTitle}>Últimos cadernos e anotações</div>
          <div className={styles.recentItem}>Node.js</div>
          <div className={styles.recentItem}>Receitas</div>
          <div className={styles.recentItem}>Flutter</div>
          <div className={styles.recentItem}>Dev</div>
          <div className={styles.recentItem}>Minhas anotações</div>
        </div>
        {/* End side menu recent */}
      </div>

      {/* Side menu footer */}
      <div className={styles.footer}>
        <div className={styles.settings}>
          <FontAwesomeIcon icon={faGear} />
          <span>Configurações</span>
        </div>
        <div className={styles.hideSideMenu}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </div>
      </div>
      {/* End side menu footer */}
    </div>
  );
}

export default SideMenu;