var
  where = 'client' // Adds files only to the client
;

Package.describe({
  name    : 'semantic:ui-search',
  summary : 'Semantic UI - Search (official): Single component release of search',
  version : '1.9.9',
  git     : 'git://github.com/Semantic-Org/UI-Search.git',
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles([
    
  ], where);
});
