do (root = module?.exports ? this) ->

  root.sticks = (template, options = {compress: false}) ->
    content = ''
    
    for key, value of template
      content += "<#{key}>"
      
      if typeof value is 'function'
        unless options.compress then content += '\n\t'
        content += sticks value()
      else
        content += value
        
      content += "</#{key}>"
      unless options.compress then content += '\n'
      
    content
