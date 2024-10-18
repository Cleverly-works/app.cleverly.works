(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6982],{77375:function(n,e,t){"use strict";t.d(e,{G5:function(){return l},UB:function(){return _},Ve:function(){return I},Wn:function(){return g},bD:function(){return f},kJ:function(){return p},rM:function(){return $}});var a,r,s,c,i,o,u,d=t(71383),m=t(75063),l=(0,m.Ps)(a||(a=(0,d.Z)(['\n  query GetFinancialJob(\n    $adminId: Int\n    $customerId: Int\n    $endDate: timestamptz\n    $startDate: timestamptz\n    $limit: Int\n    $status: [String]\n    $managerId: Int\n    $locationId: Int\n    $offset: Int\n    $supplierId: Int\n    $q: String\n    $orderBy: Job_order_by!\n  ) {\n    jobs: Job(\n      limit: $limit\n      offset: $offset\n      where: {\n        type: { _in: ["reactive", "ppm"] }\n        _and: [\n          {\n            _or: [\n              { reference: { _ilike: $q } }\n              { title: { _ilike: $q } }\n              { number: { _ilike: $q } }\n              { number: { _ilike: $q } }\n              { Invoices: { invoiceNumber: { _ilike: $q } } }\n            ]\n          }\n          {\n            _or: [\n              { _and: [{ timingStart: { _gte: $startDate } }, { timingStart: { _lte: $endDate } }] }\n              { _and: [{ scheduledAt: { _gte: $startDate } }, { scheduledAt: { _lte: $endDate } }] }\n            ]\n          }\n        ]\n        status: { _in: $status }\n        customerId: { _eq: $customerId }\n        supplierId: { _eq: $supplierId }\n        managerId: { _eq: $managerId }\n        adminId: { _eq: $adminId }\n        locationId: { _eq: $locationId }\n      }\n      order_by: [$orderBy]\n    ) {\n      id\n      type\n      number\n      status\n      description\n      reference\n      timingStart\n      scheduledAt\n      createdAt\n\n      customerTotal: customerFinances(path: "amountInfo.total")\n      supplierTotal: supplierFinances(path: "amountInfo.total")\n      customerVatTotal: customerFinances(path: "amountInfo.vatTotal")\n      supplierVatTotal: supplierFinances(path: "amountInfo.vatTotal")\n      customerExpensesTotal: customerFinances(path: "expensesInfo.expensesTotal")\n      supplierExpensesTotal: supplierFinances(path: "expensesInfo.expensesTotal")\n      customerRebateAmount: customerFinances(path: "rebate.amount")\n\n      slaId\n      invoices: Invoices(order_by: { createdAt: desc }) {\n        invoiceNumber\n      }\n      customer: Customer {\n        id\n        name\n      }\n      supplier: Supplier {\n        id\n        name\n      }\n      location: Location {\n        id\n        name\n      }\n      sublocation: Sublocation {\n        id\n        name\n      }\n      sla: SLA {\n        name\n      }\n      manager: Manager {\n        fullName\n        nameLast\n        nameFirst\n        id\n      }\n      service: Service {\n        id\n        name\n      }\n    }\n    meta: Job_aggregate(\n      where: {\n        type: { _in: ["reactive", "ppm"] }\n        _and: [\n          {\n            _or: [\n              { reference: { _ilike: $q } }\n              { title: { _ilike: $q } }\n              { number: { _ilike: $q } }\n              { number: { _ilike: $q } }\n              { Invoices: { invoiceNumber: { _ilike: $q } } }\n            ]\n          }\n          {\n            _or: [\n              { _and: [{ timingStart: { _gte: $startDate } }, { timingStart: { _lte: $endDate } }] }\n              { _and: [{ scheduledAt: { _gte: $startDate } }, { scheduledAt: { _lte: $endDate } }] }\n            ]\n          }\n        ]\n        status: { _in: $status }\n        customerId: { _eq: $customerId }\n        supplierId: { _eq: $supplierId }\n        managerId: { _eq: $managerId }\n        adminId: { _eq: $adminId }\n        locationId: { _eq: $locationId }\n      }\n    ) {\n      aggregate {\n        totalCount: count\n      }\n    }\n  }\n']))),p=(0,m.Ps)(r||(r=(0,d.Z)(['\n  query GetCustomers(\n    $customerManagerId: Int\n    $date: timestamptz\n    $limit: Int\n    $offset: Int\n    $q: String\n    $orderBy: Account_order_by!\n    $status: String\n  ) {\n    customers: Account(\n      limit: $limit\n      offset: $offset\n      where: {\n        type: { _eq: "customer" }\n        createdAt: { _eq: $date }\n        managerId: { _eq: $customerManagerId }\n        name: { _ilike: $q }\n        status: { _eq: $status }\n      }\n      order_by: [$orderBy]\n    ) {\n      id\n      createdAt\n      name\n      companyNumber\n      vatId\n      website\n      status\n      addresses: Addresses(where: { entity: { _eq: "Account" } }) {\n        id\n        registered\n        operating\n        trading\n        invoice\n        status\n        createdAt\n        address: Address {\n          id\n          name\n          addressLine1\n          addressLine2\n          addressLine3\n          city\n          county\n          geo\n          postCode\n          country: Country {\n            id\n            name\n          }\n        }\n      }\n      locations: Account_Locations {\n        id\n      }\n      finance: Financial {\n        id\n        invoicing\n        serviceRate\n        stripeId\n        totalRevenue\n        unpaidInvoices\n        creditLimit\n        creditRating\n        createdAt\n        amountOutstanding\n        accountId\n        approvalThreshold\n        arrangementFee\n        spendThreshold\n        defaultPaymentMethod\n      }\n      manager: Manager {\n        id\n        nameFirst\n        nameLast\n      }\n      contactUsers: Account_Users(where: { isContact: { _eq: true } }) {\n        id\n        role\n        position\n        isContact\n        lastSignInAt\n        userId\n        user: User {\n          id\n          name: nameFirst\n          nameFirst\n          nameLast\n          phone\n          status\n          email\n          createdAt\n          fullName\n          accounts: Account_Users {\n            id\n            role\n            position\n            isContact\n            status\n            account: Account {\n              id\n              name\n              type\n            }\n          }\n        }\n      }\n    }\n    meta: Account_aggregate(\n      where: {\n        type: { _eq: "customer" }\n        createdAt: { _eq: $date }\n        managerId: { _eq: $customerManagerId }\n        name: { _ilike: $q }\n        status: { _eq: $status }\n      }\n    ) {\n      aggregate {\n        totalCount: count\n      }\n    }\n  }\n']))),_=(0,m.Ps)(s||(s=(0,d.Z)(['\n  query GetCustomer($id: Int!) {\n    customer: Account_by_pk(id: $id) {\n      id\n      name\n      clientType: ClientType {\n        id\n        name\n      }\n      structure\n      companyNumber\n      vatId\n      website\n      status\n      createdAt\n      updatedAt\n      status\n      type\n      meta\n      usersMeta: Account_Users_aggregate {\n        aggregate {\n          count\n        }\n      }\n      propertiesMeta: Account_Locations_aggregate {\n        aggregate {\n          count\n        }\n      }\n      jobsMeta: CustomerJobs_aggregate {\n        aggregate {\n          count\n        }\n      }\n      addresses: Addresses(where: { entity: { _eq: "Account" } }) {\n        id\n        registered\n        operating\n        trading\n        invoice\n        status\n        createdAt\n        address: Address {\n          id\n          name\n          addressLine1\n          addressLine2\n          addressLine3\n          city\n          county\n          geo\n          postCode\n          country: Country {\n            id\n            name\n          }\n        }\n      }\n      manager: Manager {\n        id\n        nameFirst\n        nameLast\n        phone\n        email\n      }\n      contactUsers: Account_Users(where: { isContact: { _eq: true } }) {\n        id\n        role\n        position\n        isContact\n        lastSignInAt\n        userId\n        user: User {\n          id\n          name: nameFirst\n          nameFirst\n          nameLast\n          phone\n          status\n          email\n          createdAt\n          fullName\n          accounts: Account_Users {\n            id\n            role\n            position\n            isContact\n            status\n            account: Account {\n              id\n              name\n              type\n            }\n          }\n        }\n      }\n      bankAccounts: BankAccounts {\n        id\n        stripeId\n        accountNumber\n        routingNumber\n        bic\n        iban\n        status\n        default\n        createdAt\n      }\n      media: Media {\n        id\n        medium: Medium {\n          id\n          category\n          filename\n          meta\n          type\n        }\n      }\n      cards: Cards {\n        id\n        stripeId\n        type\n        last4\n        expYear\n        expMonth\n        status\n        default\n        createdAt\n      }\n      jobs: CustomerJobs {\n        id\n        title\n      }\n      finance: Financial {\n        id\n        invoicing\n        serviceRate\n        stripeId\n        totalRevenue\n        unpaidInvoices\n        creditLimit\n        creditRating\n        createdAt\n        amountOutstanding\n        accountId\n        approvalThreshold\n        arrangementFee\n        spendThreshold\n        defaultPaymentMethod\n      }\n      accountEntries: AccountEntries(order_by: { createdAt: asc }) {\n        id\n        outstandingAmount\n        type\n        entryId\n        currencyId\n        createdAt\n        balance\n        amount\n        accountId\n        updatedAt\n      }\n    }\n  }\n']))),$=(0,m.Ps)(c||(c=(0,d.Z)(["\n  query GetCustomerManage($id: Int!) {\n    customer: Account_by_pk(id: $id) {\n      id\n      name\n      website\n      companyNumber\n      vatId\n      meta\n      contactUsers: Account_Users(where: { isContact: { _eq: true } }) {\n        id\n        isContact\n        userId\n        user: User {\n          id\n          email\n          fullName\n          meta\n          name: nameFirst\n          nameFirst\n          nameLast\n          phone\n          status\n        }\n      }\n      clientType: ClientType {\n        id\n        label: name\n        value: id\n      }\n      status\n      managerSelected: Manager {\n        id\n        label: fullName\n        value: id\n      }\n    }\n  }\n"]))),I=(0,m.Ps)(i||(i=(0,d.Z)(["\n  mutation AddCustomer($objects: [Account_insert_input!]!) {\n    insert_Account(objects: $objects) {\n      returning {\n        id\n      }\n    }\n  }\n"]))),g=(0,m.Ps)(o||(o=(0,d.Z)(["\n  mutation UpdateCustomer(\n    $customerId: Int!\n    $customer: Account_set_input\n    $userId: Int!\n    $user: User_set_input\n    $hasUpdateUser: Boolean!\n  ) {\n    update_Account_by_pk(pk_columns: { id: $customerId }, _set: $customer) {\n      id\n    }\n    update_User_by_pk(pk_columns: { id: $userId }, _set: $user) @include(if: $hasUpdateUser) {\n      id\n    }\n  }\n"]))),f=(0,m.Ps)(u||(u=(0,d.Z)(["\n  mutation AddFinancial($objects: [Financial_insert_input!]!) {\n    insert_Financial(objects: $objects) {\n      returning {\n        id\n        accountId\n        locationId\n      }\n    }\n  }\n"])))},9316:function(n,e,t){"use strict";t.d(e,{E:function(){return o}});var a,r=t(50029),s=t(64687),c=t.n(s),i=t(69496),o=(a=(0,r.Z)(c().mark(function n(e,t){var a,r,s,o=arguments;return c().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return a=o.length>2&&void 0!==o[2]&&o[2],n.prev=1,n.next=4,e.query({query:i.WF,variables:{email:t}});case 4:if(!((s=n.sent.data.users)&&s.length>0)){n.next=8;break}return n.abrupt("return",!!a&&s[0]);case 8:return n.abrupt("return",!a||null);case 11:return n.prev=11,n.t0=n.catch(1),n.abrupt("return",!0);case 14:case"end":return n.stop()}},n,null,[[1,11]])})),function(n,e){return a.apply(this,arguments)})},69496:function(n,e,t){"use strict";t.d(e,{$E:function(){return M},AX:function(){return q},I4:function(){return U},JA:function(){return w},MT:function(){return F},Px:function(){return k},WF:function(){return C},ZA:function(){return N},a8:function(){return Z},fA:function(){return T},fo:function(){return v},ge:function(){return D},iM:function(){return x},nE:function(){return S},nh:function(){return P},r1:function(){return L},tW:function(){return O},uz:function(){return j}});var a,r,s,c,i,o,u,d,m,l,p,_,$,I,g,f,y,h,A=t(71383),b=t(75063),U=(0,b.Ps)(a||(a=(0,A.Z)(["\n  mutation InsertAccountUser($objects: [Account_User_insert_input!]!) {\n    insert_Account_User(objects: $objects) {\n      returning {\n        id\n      }\n    }\n  }\n"]))),q=(0,b.Ps)(r||(r=(0,A.Z)(["\n  mutation UpdateUser(\n    $id: Int!\n    $accountUserId: Int!\n    $accountUserChanges: Account_User_set_input\n    $changes: User_set_input\n    $updateAccountUser: Boolean!\n  ) {\n    update_Account_User_by_pk(pk_columns: { id: $accountUserId }, _set: $accountUserChanges)\n      @include(if: $updateAccountUser) {\n      id\n    }\n    update_User_by_pk(pk_columns: { id: $id }, _set: $changes) {\n      id\n    }\n  }\n"]))),v=(0,b.Ps)(s||(s=(0,A.Z)(["\n  query GetUsers(\n    $accountId: Int\n    $accountType: String\n    $date: timestamptz\n    $limit: Int\n    $offset: Int\n    $q: String\n    $orderBy: User_order_by!\n    $status: String\n  ) {\n    users: User(\n      limit: $limit\n      offset: $offset\n      where: {\n        Account_Users: { Account: { id: { _eq: $accountId }, type: { _eq: $accountType } } }\n        createdAt: { _eq: $date }\n        _or: [\n          { email: { _ilike: $q } }\n          { nameFirst: { _ilike: $q } }\n          { nameLast: { _ilike: $q } }\n        ]\n        status: { _eq: $status }\n      }\n      order_by: [$orderBy]\n    ) {\n      id\n      name: nameFirst\n      nameFirst\n      nameLast\n      phone\n      status\n      email\n      createdAt\n      meta\n      invoiceThreshold\n      quoteThreshold\n      media: Media {\n        id\n        medium: Medium {\n          id\n          category\n          filename\n          meta\n          type\n        }\n      }\n      accounts: Account_Users {\n        id\n        role\n        position\n        isContact\n        status\n        account: Account {\n          id\n          name\n          type\n        }\n        userLocations: User_Account_Locations {\n          accountLocationId\n        }\n      }\n    }\n    meta: User_aggregate(\n      where: {\n        Account_Users: { Account: { id: { _eq: $accountId }, type: { _eq: $accountType } } }\n        createdAt: { _eq: $date }\n        _or: [{ nameFirst: { _ilike: $q } }, { nameLast: { _ilike: $q } }]\n        status: { _eq: $status }\n      }\n    ) {\n      aggregate {\n        totalCount: count\n      }\n    }\n  }\n"]))),w=(0,b.Ps)(c||(c=(0,A.Z)(["\n  query GetUser($id: Int!) {\n    user: User_by_pk(id: $id) {\n      id\n      fullName\n      name: nameFirst\n      nameFirst\n      nameLast\n      phone\n      status\n      email\n      createdAt\n      meta\n      invoiceThreshold\n      quoteThreshold\n      media: Media {\n        id\n        medium: Medium {\n          id\n          category\n          filename\n          meta\n          type\n        }\n      }\n      accounts: Account_Users {\n        id\n        role\n        position\n        isContact\n        status\n        account: Account {\n          id\n          name\n          type\n        }\n      }\n    }\n  }\n"]))),C=(0,b.Ps)(i||(i=(0,A.Z)(["\n  query CheckDuplicateEmail($email: String!) {\n    users: User_public(where: { email: { _eq: $email } }) {\n      id\n      nameFirst\n      nameLast\n      email\n      phone\n    }\n  }\n"]))),k=(0,b.Ps)(o||(o=(0,A.Z)(["\n  fragment UserFields on User {\n    id\n    email\n    nameFirst\n    nameLast\n    fullName\n    phone\n    status\n  }\n"]))),Z=(0,b.Ps)(u||(u=(0,A.Z)(["\n  mutation SendGoogleAuthCode($code: String!, $id: Int!, $type: String!) {\n    createGoogleToken(code: $code, id: $id, type: $type) {\n      success\n      tokens\n      error\n    }\n  }\n"]))),L=(0,b.Ps)(d||(d=(0,A.Z)(["\n  mutation GenerateMSURL($type: String!, $id: Int!) {\n    genenrateMSURL(id: $id, type: $type) {\n      url\n    }\n  }\n"]))),F=(0,b.Ps)(m||(m=(0,A.Z)(["\n  mutation signoutMS($id: Int!, $type: String!, $email: String!) {\n    signoutMS(id: $id, type: $type, email: $email) {\n      error\n      msId\n      success\n    }\n  }\n"]))),S=(0,b.Ps)(l||(l=(0,A.Z)(["\n  query getAccountMeta($id: Int!) {\n    account: Account_by_pk(id: $id) {\n      meta\n    }\n  }\n"]))),P=(0,b.Ps)(p||(p=(0,A.Z)(["\n  query user($id: Int!) {\n    user: User_by_pk(id: $id) {\n      meta\n      invoiceThreshold\n      quoteThreshold\n    }\n  }\n"]))),x=(0,b.Ps)(_||(_=(0,A.Z)(["\n  query GetAccountUserMeta($userId: Int!, $accountId: Int!) {\n    accountUser: Account_User(where: { userId: { _eq: $userId }, accountId: { _eq: $accountId } }) {\n      meta\n    }\n  }\n"]))),T=(0,b.Ps)($||($=(0,A.Z)(["\n  mutation UpdateAccountUserByUserIdAccoutId(\n    $userId: Int!\n    $accountId: Int!\n    $changes: Account_User_set_input!\n  ) {\n    update_Account_User(\n      where: { userId: { _eq: $userId }, accountId: { _eq: $accountId } }\n      _set: $changes\n    ) {\n      returning {\n        id\n      }\n    }\n  }\n"]))),M=(0,b.Ps)(I||(I=(0,A.Z)(["\n  mutation updateAccount($accountId: Int!, $set: Account_set_input!) {\n    update_Account_by_pk(pk_columns: { id: $accountId }, _set: $set) {\n      id\n    }\n  }\n"]))),j=(0,b.Ps)(g||(g=(0,A.Z)(["\n  mutation updateUserMeta($userId: Int!, $meta: jsonb!) {\n    update_User_by_pk(pk_columns: { id: $userId }, _set: { meta: $meta }) {\n      id\n      meta\n    }\n  }\n"]))),D=(0,b.Ps)(f||(f=(0,A.Z)(['\n  query userDevices($accountId: Int!) {\n    users: User(\n      where: {\n        Account_Users: { accountId: { _eq: $accountId }, status: { _eq: "active" } }\n        UserDevices: { status: { _eq: "active" } }\n        status: { _eq: "active" }\n      }\n    ) {\n      id\n      fullName\n      devices: UserDevices(\n        order_by: { updatedAt: desc_nulls_last }\n        where: { status: { _eq: "active" } }\n        limit: 1\n      ) {\n        id\n        playerId\n      }\n    }\n  }\n']))),N=(0,b.Ps)(y||(y=(0,A.Z)(['\n  query GetAccountLocations($accountId: Int, $limit: Int, $offset: Int) {\n    location: Location(\n      offset: $offset\n      limit: $limit\n      where: {\n        Account_Locations: {\n          accountId: { _eq: $accountId }\n          Account: { type: { _eq: "customer" } }\n        }\n      }\n    ) {\n      id\n      name\n      accountLocations: Account_Locations {\n        id\n      }\n      addresses: Addresses(where: { entity: { _eq: "Location" }, registered: { _eq: true } }) {\n        id\n        status\n        address: Address {\n          id\n          name\n          addressLine1\n          postCode\n        }\n      }\n    }\n    meta: Location_aggregate(\n      where: {\n        Account_Locations: {\n          accountId: { _eq: $accountId }\n          Account: { type: { _eq: "customer" } }\n        }\n      }\n    ) {\n      aggregate {\n        totalCount: count\n      }\n    }\n  }\n']))),O=(0,b.Ps)(h||(h=(0,A.Z)(["\n  mutation InsertUserAccountLocations(\n    $accountUserId: Int!\n    $objects: [User_Account_Location_insert_input!]!\n  ) {\n    delete_User_Account_Location(where: { accountUserId: { _eq: $accountUserId } }) {\n      affected_rows\n    }\n    insert_User_Account_Location(objects: $objects) {\n      affected_rows\n      returning {\n        id\n      }\n    }\n  }\n"])))},50160:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return k}});var a=t(19076),r=t(59499),s=t(50029),c=t(16835),i=t(64687),o=t.n(i),u=t(67294),d=t(66252),m=t(73359),l=t(50319),p=t(77375),_=t(11163),$=t.n(_),I=t(55863),g=t(73987),f=t(9316),y=t(43297),h=t(74231),A=function(){return(0,h.Ry)().shape({managerSelected:(0,h.Ry)().required(),name:(0,h.Z_)().required(),website:(0,h.Z_)(),companyNumber:(0,h.Z_)(),vatId:(0,h.Z_)(),status:(0,h.Z_)().oneOf(["active","inactive"]).required(),contactUseremail:(0,h.Z_)().when("contactUser",{is:"true",then:(0,h.Z_)().required()}),contactUsernameFirst:(0,h.Z_)().when("contactUser",{is:"true",then:(0,h.Z_)().required()}),contactUsernameLast:(0,h.Z_)().when("contactUser",{is:"true",then:(0,h.Z_)().required()}),contactUserphone:(0,h.Z_)().when("contactUser",{is:"true",then:(0,h.Z_)()}),contactUserstatus:(0,h.Z_)().when("contactUser",{is:"true",then:(0,h.Z_)().required()})})},b=t(40755),U=t(85893);function q(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})),t.push.apply(t,a)}return t}function v(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?q(Object(t),!0).forEach(function(e){(0,r.Z)(n,e,t[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):q(Object(t)).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))})}return n}var w="/dashboard/customers/",C=function(){var n=(0,I.q)(),e=(0,d.x)(),t=(0,u.useContext)(g.Z).user,a=(0,_.useRouter)().query,r=(0,u.useState)(!1),i=r[0],h=r[1],q=(0,u.useState)([]),C=q[0],k=q[1],Z=(0,u.useState)(!1),L=Z[0],F=Z[1],S=(0,b.RM)(t.id),P=(0,m.t)(p.rM,{variables:{id:a.id}}),x=(0,c.Z)(P,2),T=x[0],M=x[1],j=M.loading,D=M.data,N=(D=void 0===D?{customer:{}}:D).customer,O=(0,b.BR)({adminId:t.id,xeroClientId:null==a?void 0:a.clientId},[n.admin]),E=O.onCallAuthorize,R=O.onGetXeroContacts;(0,u.useEffect)(function(){a.id&&T()},[]),(0,u.useEffect)(function(){var n,e=(n=(0,s.Z)(o().mark(function n(e){var t,a;return o().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,R(e);case 3:a=(0,n.sent).map(function(n){return{label:"".concat(n.name," - ").concat(n.contactID),value:n.contactID}}),F(!1),k(a),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),F(!0);case 12:case"end":return n.stop()}},n,null,[[0,9]])})),function(e){return n.apply(this,arguments)});null!=S&&S.companyId&&e(S.companyId)},[null==S?void 0:S.companyId]);var G,B,J=(0,l.D)(p.bD,{onCompleted:function(n){var e=n.insert_Financial.returning[0].accountId;$().push("".concat(w,"view?id=").concat(e))}}),z=(0,c.Z)(J,1)[0],X=(0,l.D)(p.Ve,{onCompleted:(G=(0,s.Z)(o().mark(function n(e){var t;return o().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.insert_Account.returning[0].id,n.next=3,z({variables:{objects:[{accountId:t}]}});case 3:case"end":return n.stop()}},n)})),function(n){return G.apply(this,arguments)})}),V=(0,c.Z)(X,1)[0],W=(0,l.D)(p.Wn,{onCompleted:function(n){var e=n.update_Account_by_pk.id;$().push("".concat(w,"view?id=").concat(e))}}),H=(0,c.Z)(W,1)[0],Y=(B=(0,s.Z)(o().mark(function n(r){var s,c,i,u;return o().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,h(!0),(c={}).Customer={managerId:r.managerSelected.value,name:r.name,website:r.website||null,companyNumber:r.companyNumber||null,vatId:r.vatId||null,status:r.status,type:"customer"},null!==(s=r.xeroContact)&&void 0!==s&&s.value&&(c.Customer.meta=v(v({},N.meta),{},{xeroContactId:r.xeroContact.value,xeroAssignedCompanyId:null==S?void 0:S.companyId})),r.clientType&&(c.Customer.taxonomyId_clientType=r.clientType.value),i={nameFirst:r.contactUsernameFirst,nameLast:r.contactUsernameLast,email:r.contactUseremail,phone:r.contactUserphone,status:r.contactUserstatus},!a.id){n.next=12;break}return n.next=10,H({variables:{customerId:N.id,customer:c.Customer,hasUpdateUser:!!r.contactUseruserId,userId:r.contactUseruserId,user:i}});case 10:n.next=20;break;case 12:return c.Admins={data:[{adminId:t.accountId,status:r.status}]},n.next=15,(0,f.E)(e,r.contactUseremail,!0);case 15:return u=n.sent,c.Account_Users={data:[{isContact:!0,role:"owner",status:r.contactUserstatus}]},u?c.Account_Users.data[0].userId=u.id:c.Account_Users.data[0].User={data:{nameFirst:r.contactUsernameFirst,nameLast:r.contactUsernameLast,email:r.contactUseremail,phone:r.contactUserphone,status:"active",meta:{notificationSettings:{sms:!0,email:!0,toast:!0,pushNotification:!0}}}},n.next=20,V({variables:{objects:v(v({},c.Customer),{},{Admins:c.Admins,Account_Users:c.Account_Users})}});case 20:return n.prev=20,h(!1),n.finish(20);case 23:case"end":return n.stop()}},n,null,[[0,,20,23]])})),function(n){return B.apply(this,arguments)}),K=function(){E(window.location.href)};return(!j||!a.id)&&(0,U.jsx)(y.P,{loading:i,account:N.id?N:null,id:a.id||null,onSubmit:Y,schema:A,type:"customer",user:t,displayXeroContacts:!!(null!=S&&S.clientId),xeroContacts:C,displaySignin:L,handleXeroAuthorize:K},N?N.id:"new")},k=function(){return(0,U.jsx)(a.Z,{pageHeading:{heading:"Customers - Manage"},View:(0,U.jsx)(C,{})})}},44402:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/customers/manage",function(){return t(50160)}])}},function(n){n.O(0,[2283,212,8890,619,1100,1336,6043,5370,3911,3776,9241,9781,6357,1772,3297,9774,2888,179],function(){return n(n.s=44402)}),_N_E=n.O()}]);