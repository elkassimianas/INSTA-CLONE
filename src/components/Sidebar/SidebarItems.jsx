import Home from './Home'
import Notifications from './Notifications'
import CreatePost from './CreatePost'
import ProfileLink from './ProfileLink'

const SidebarItems = () => {
  return (
    <>
        <Home />
        {/* Search Bar */}
        <Notifications />
        <CreatePost />
        <ProfileLink />
    </>
  )
}

export default SidebarItems