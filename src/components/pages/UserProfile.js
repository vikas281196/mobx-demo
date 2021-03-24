import React from 'react'

function UserProfile({ userStore }) {
  return (
    <div>
      Hello {userStore.user.fullname}
    </div>
  )
}

export default UserProfile
