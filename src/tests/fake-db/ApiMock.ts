import {mock} from './MockAxios';

import './data/login/login';
import './data/user/user';
import './data/repository/repository';

mock.onAny().passThrough();
