if Rails.env === 'production'
  Rails.application.config.session_store :cookie_store, key: 'portfolio', domain: 'sergiufrunza.com'
else
  Rails.application.config.session_store :cookie_store, key: 'portfolio'
end
