<nav class="navbar navbar-expand-lg navbar-light bg-light ">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse menuArea" id="navbarSupportedContent">
      @php $getUrl = Route::current()->getName();  @endphp 
      <ul class="navbar-nav mr-auto">
        <li class="nav-item @if($getUrl== '') activeItemMenu @endif">
          <a class="nav-link" href="{{ url('/')}}">Home </a>
        </li>
        <li class="nav-item @if($getUrl== 'import') activeItemMenu @endif">
          <a class="nav-link" href="{{ route('import')}}">Import</a>
        </li>
        <li class="nav-item @if($getUrl== 'export') activeItemMenu @endif">
          <a class="nav-link" href="{{ route('export')}}">Export</a>
        </li>
      </ul>
    </div>
  </nav>