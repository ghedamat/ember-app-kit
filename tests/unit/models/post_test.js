import { test , moduleForModel } from 'appkit/tests/helpers/module_for';

import Post from 'appkit/models/post';

moduleForModel('post', "Unit - Tile");

test("it exists", function(){
  ok(this.subject() instanceof Post);
});

test("it has a name", function(){
  ok(this.subject().get('name'));
});
