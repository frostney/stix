do ($ = @jQuery, stix = @stix) ->

  content = ''
  
  for i in [0..10]
    content += stix
      li: ->
        span: ->
          "This is item #{i}" 
          
  $('body').prepend content
