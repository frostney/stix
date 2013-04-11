do (root = module?.exports ? this) ->

  fragment = (template, options = {compress: root.stix.compress, recursive: true}) ->
    content = ''
    
    if typeof template is 'string'
      return template
    else
      for key, value of template
        content += "<#{key}>"
        
        if typeof value is 'function'
          unless options.compress then content += '\n\t'
          if options.recursive then content += fragment value()
        else
          content += value
          
        content += "</#{key}>"
        unless options.compress then content += '\n'
        
    content

  root.stix = 
    compress: false
    fragment: fragment
    compile: (template) ->
      -> fragment(template)
