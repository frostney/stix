do (root = module?.exports ? this) ->

  root.stix = (template, options = {compress: false}) ->
    content = ''
    
    if typeof template is 'string'
      return template
    else
      for key, value of template
        content += "<#{key}>"
        
        if typeof value is 'function'
          unless options.compress then content += '\n\t'
          content += stix value()
        else
          content += value
          
        content += "</#{key}>"
        unless options.compress then content += '\n'
      
    content
