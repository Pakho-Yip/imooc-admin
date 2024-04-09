export default {
  login: {
    title: 'User Login',
    loginBtn: 'Login',
    usernameRule: 'User name is mandatory',
    passwordRule: 'The password cannot be less than 6 characters',
    desc: `
    Test permission account:<br />
    Three kinds of accounts are available:<br />
    1. Super Administrator Account:<br />
    2. Administrator Account:<br />
    3. Test configurable accounts:<br />
    The password is as follows:<br />
    <br />
    Import User account:<br />
    You can log in using the imported user name <br />
    The password is as follows:123456<br />
    <b>Note: Import users differentiate between Chinese and English libraries！！！！</b>
    `
  },
  route: {
    profile: 'Individual center',
    user: 'user',
    excelImport: 'Excel import',
    userManage: 'Employee management',
    userInfo: 'Employee information',
    roleList: 'Role list',
    permissionList: 'Permission list',
    article: 'article',
    articleRanking: 'Article ranking',
    articleCreate: 'Create article',
    articleDetail: 'Article details',
    articleEditor: 'Article editor'
  },
  toast: {
    switchLangSuccess: 'Switch language successfully'
  },
  tagsView: {
    refresh: 'Refresh',
    closeRight: 'Close right',
    closeOther: 'Close other'
  },
  theme: {
    themeColorChange: 'Theme color change',
    themeChange: 'Subject change'
  },
  universal: {
    confirm: 'OK',
    cancel: 'Cancel'
  },
  navBar: {
    themeChange: 'Subject modification',
    headerSearch: 'Page search',
    screenfull: 'Full screen replacement',
    lang: 'internationalization',
    guide: 'Functional guidance',
    home: 'Home page',
    course: 'Course homepage',
    logout: 'Log out'
  },
  guide: {
    close: 'Off',
    next: 'next',
    prev: 'previous',
    guideTitle: 'guide',
    guideDesc: 'Enable boot function',
    hamburgerTitle: 'Hamburger button',
    hamburgerDesc: 'Open and close the left menu',
    breadcrumbTitle: 'crumbs',
    breadcrumbDesc: 'Indicates the current page location',
    searchTitle: 'search',
    searchDesc: 'Page link search',
    fullTitle: 'Full screen',
    fullDesc: 'Page display switch',
    themeTitle: 'theme',
    themeDesc: 'Change project topic',
    langTitle: 'internationalization',
    langDesc: 'Language switching',
    tagTitle: 'tag',
    tagDesc: 'The page TAB is open',
    sidebarTitle: 'menu',
    siderbarDesc: 'Item function menu'
  },
  profile: {
    muted:
      '《vue3 rewrites VUe-elements-admin to achieve a comprehensive solution of background front-end》Project presentation',
    introduce: 'introduce',
    projectIntroduction: 'Project introduction',
    projectFunction: 'Project function',
    feature: 'Feature',
    chapter: 'chapter',
    author: 'author',
    name: 'Sunday',
    job: 'A front-end developer ape',
    Introduction:
      'Senior technical expert, has worked in domestic first-line Internet companies, coordinated a number of large-scale projects the user number has exceeded 10 million level'
  },
  userInfo: {
    print: 'print',
    title: 'Employee information',
    name: 'name',
    sex: 'sex',
    nation: 'nation',
    mobile: 'Mobile phone number',
    province: 'Place of Residence',
    date: 'On-board time',
    remark: 'remark',
    address: 'Contact address',
    experience: 'Go through',
    major: 'profession',
    glory: 'honour',
    foot: 'Signature:______________Date:______________'
  },
  uploadExcel: {
    upload: 'Click to upload',
    drop: 'Drag the file here'
  },
  excel: {
    importExcel: 'excel import',
    exportExcel: 'excel export',
    exportZip: 'zip export',
    name: 'name',
    mobile: 'Contact information',
    avater: 'avatar',
    role: 'role',
    openTime: 'Opening time',
    action: 'Controls',
    show: 'view',
    showRole: 'role',
    defaultRole: 'employee',
    remove: 'delete',
    removeSuccess: 'Successfully deleted',
    title: 'Export to excel',
    placeholder: 'excel file name',
    defaultName: 'Employee management sheet',
    close: 'Cancel',
    confirm: 'export',
    importSuccess: ' The employee data is imported successfully. Procedure',
    dialogTitle1: 'Make sure you want to delete the user ',
    dialogTitle2: ' Did you?',
    roleDialogTitle: 'Configure roles'
  },
  role: {
    buttonText: 'New role',
    index: 'Serial number',
    name: 'name',
    desc: 'Description',
    action: 'Controls',
    assignPermissions: 'Assign authority',
    removeRole: 'Deleting a role',
    dialogTitle: 'New role',
    dialogRole: 'Role name',
    dialogDesc: 'Role description',
    updateRoleSuccess: 'The user role is updated successfully. Procedure'
  },
  permission: {
    name: 'Permission name',
    mark: 'Permission identification',
    desc: 'Permission description'
  },
  article: {
    ranking: 'Ranking',
    title: 'title',
    author: 'author',
    publicDate: 'Release time',
    desc: 'Content introduction',
    action: 'Controls',
    dynamicTitle: 'Dynamic display',
    show: 'view',
    remove: 'delete',
    edit: 'edit',
    dialogTitle1: 'Make sure to delete the article ',
    dialogTitle2: ' Did you?',
    removeSuccess: 'Article deleted successfully',
    titlePlaceholder: 'Please enter the title of the article',
    markdown: 'markdown',
    richText: 'Rich text',
    commit: 'submit',
    createSuccess: 'Article creation success',
    editorSuccess: 'Article modified successfully'
  }
}
