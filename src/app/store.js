import { configureStore } from '@reduxjs/toolkit'

import postsSlice from '../features/posts/postsSlice'
import userSlice from '../features/users/userSlice'
import notificationsSlice from '../features/notifications/notificationsSlice'

export default configureStore({
  reducer: {
    posts: postsSlice,
    users: userSlice,
    notifications: notificationsSlice,
  },
})
