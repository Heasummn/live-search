export const addTracker = (name) => ({
  type: 'ADD_TRACKER',
  name
})

export const addPost = (subName, post) => ({
  type: 'ADD_POST',
  name: subName,
  post
})

export const changePage = (subName, page) => ({
  type: 'CHANGE_PAGE',
  name: subName,
  page
})